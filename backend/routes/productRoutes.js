// productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/getProductInfo/:id', productController.getProductDetaisFromId);

router.get('/getAllProducts', productController.getAllProducts);

router.get('/getProductById/:id', productController.getProductById);

router.post('/createProduct', productController.createProduct);

router.put('/updateProduct/:id', productController.updateProduct);

router.delete('/deleteProduct/:id', productController.deleteProduct);

module.exports = router;
