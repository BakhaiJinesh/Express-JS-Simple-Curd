const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
const app = express();


// Middleware
app.use(express.json());
// app.use(express.text()); // for Fetch Text from Server currently cause of nosql use json based data 


// Routers
app.use("/api/products", productRoute);



app.get("/", (req, res) => {
    res.send("You enter to server");
})


mongoose.connect("mongodb+srv://admin:admin@backend.ctpgxmw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backend")
    .then(() => {
        console.log("DB Connected...");
        app.listen(3000, () => {

            console.log("Server running on by express");
        })

    })
    .catch(() => {
        console.log("DB Not Connected...");
    })