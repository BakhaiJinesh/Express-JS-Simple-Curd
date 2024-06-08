// Get All API
const express = require('express');
const router = express.Router();
const { getAllProduct, getProdByID, addProducts, updateProduct, deleteProduct } = require('../controller/product.controller.js');

// Get All
router.get('/', getAllProduct);
router.get("/:id", getProdByID);

// Add Product
router.post("/", addProducts);
//Update Prodcut
router.put("/:id", updateProduct);
//Delete Product
router.delete("/:id", deleteProduct);

module.exports = router;