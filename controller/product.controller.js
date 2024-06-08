const products = require('../models/product.model.js');

const getAllProduct = async (req, res) => {
    try {
        const Products = await products.find({});
        const count = await products.countDocuments({});
        res.status(200).json([{ "Total Records": count }, { "products": Products }]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Get By Id API
const getProdByID = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await products.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ messeage: error.message });
    }
};

const addProducts = async (req, res) => {
    try {
        const countBefore = await products.countDocuments();
        const product = await products.create(req.body);
        const countAfter = await products.countDocuments();
        const recordsAdded = countAfter - countBefore;
        res.status(200).json([{ "Product Model ": product }, { "Total Records Added": recordsAdded }]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await products.findByIdAndUpdate(id, req.body);
        res.status(200).json({ "Product Updated": updatedProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const countBefore = await products.countDocuments();
        const deletedProduct = await products.findByIdAndDelete(id);
        const countAfter = await products.countDocuments();
        const recordsDeleted = countBefore - countAfter;
        res.status(200).json([{ "Total Delete Records": recordsDeleted }, { 'Product Delete Succeed': deletedProduct }]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getAllProduct,
    getProdByID,
    addProducts,
    updateProduct,
    deleteProduct
};
