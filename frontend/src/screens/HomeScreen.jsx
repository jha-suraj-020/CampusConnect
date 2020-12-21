import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  // runs as soon as the components loads
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      // CORS error - Cross-Origin Resource Sharing
      // add a proxy to resolve

      setProducts(data)
    }

    fetchProducts()
  }, [])
  // second argument to use effect - an array of dependencies:
  // i.e. anything you want to fire useEffect when it changes

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
