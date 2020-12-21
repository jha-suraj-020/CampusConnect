import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import productRoutes from './Routes/product.js'
import { notFound, errorHandler } from './middleware/error.js';

// config
dotenv.config()

//connect DB
connectDB()

// express
const app = express()


// middleware - access to any req-res cycle
app.use((req, res, next) => {
    console.log(req.originalUrl)
    next()
})


// routes
app.use('/api/products', productRoutes)


// fallback for 404 error (using after all routes)
app.use(notFound)

// express error middleware
// overloading default error handler as it sends HTML as response
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)