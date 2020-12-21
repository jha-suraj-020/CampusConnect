// const express = require("express")
// const dotenv = require("dotenv")
// const products = require("./data/products")

// using ES6 modules in nodeJS :-
// add "type": "module" to package.json
import express from "express"
import dotenv from "dotenv"
import products from "./data/products.js"

const app = express()
dotenv.config()

app.get("/api/products", (req, res) => {
    res.json(products);
})

app.get("/api/products/:id", (req, res) => {
    const product = products.find( p => p._id === req.params.id)
    res.json(product);
})

const PORT = process.env.PORT || 5000
app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)