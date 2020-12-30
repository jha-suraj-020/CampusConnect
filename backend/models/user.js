import mongoose from 'mongoose'
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
 {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
 },
 {
    timestamps: true
 }
)

// mongoose schema methods
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// things to happen before saving data to db
userSchema.pre('save', async function(next) {
    // if password is not modified, don't do it. 
    // Eg:- update user name & gmail but not password!
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema);

export default User