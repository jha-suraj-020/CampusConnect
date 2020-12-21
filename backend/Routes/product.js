import express from 'express'
import asyncHandler from 'express-async-handler';
import Product from '../models/product.js';

const router = express.Router()

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get("/", asyncHandler(async (req, res) => {
    const products = await Product.find({})
    // to handle error:-
    // op1 - Try Catch block everywhere
    // op2 - express-async-handler package

    res.json(products);
}))

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
router.get("/:id", asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    // if error goes to default ovarloaded express middleware
    // because of asyncHandler

    if(product){
        res.json(product);
    } else {
        // this error if actual formatted objectId but not in dataBase
        res.status(404)
        throw new Error('Product not found')
    }
}))

export default router