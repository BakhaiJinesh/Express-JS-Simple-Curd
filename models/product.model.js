const { timeStamp } = require("console");
const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, 'Product Name is required']
        },
        quantity: {
            type: Number,
            require: [true, 'Product quantity is required'],
            default: 0
        },
        price: {
            type: Number,
            require: [true, 'Product price is required'],
            default: 0
        },
        image: {
            type: String,
            require: false
        },
    },
    {
        timestamps : true
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;