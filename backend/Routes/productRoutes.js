import express from 'express'
import { getProducts, getProductById } from '../controllers/productController.js'

// express router
const router = express.Router()

// router.get("/", getProducts)    -- one way
router.route('/').get(getProducts)

router.route('/:id').get(getProductById)

export default router