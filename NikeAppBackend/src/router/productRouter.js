const express = require('express')
const router = express.Router()
const { getProduct, getAllProducts } = require('../database/products')

router.get('/', async (req, res) => {
    const products = await getAllProducts(); 

    res.send({status: 'OK', data: products})
});

router.get('/:productId', async (req, res) => {
    try {
        const product = await getProduct(req.params.productId);
        if (!product) {
            return res.status(404).send({status: 'FAILED', error: 'Product not found'})
        }
        res.send({status: 'OK', data: product})
    } catch(e) {
        res.status(401).send({status: 'FAILED', error: e.message})
    }
});

module.exports = router