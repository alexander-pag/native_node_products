/** packages */
const mongoose = require("mongoose")

/** Schema creation */
const productSchema = new mongoose.Schema({
    name:{
        type: "String",
        required: true
    },
    price:{
        type: "String",
        required: true
    },
    existence:{
        type: "Number",
        required: true
    },
    category:{
        type: "String",
        required: true,
    },
    // is the net content, example grams, liters, milliliters
    content:{
        type: "String",
        required: true
    }
});

/** schema exportation */
module.exports = productSchema;