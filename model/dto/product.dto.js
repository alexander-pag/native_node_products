/** packages */
const mongoose = require("mongoose")
const db = require("../db-connection/mongodb");

/** using schema */
const schema = require("../schemas/product.schemas");
db();

schema.statics = {
    create: function (data, cb){
        let prod = new this(data)
        prod.save(cb)
    },
    getAll: function (query, cb){
        this.find(query, cb)
    },
    getByCategory: function (query, cb){
        this.find(query, cb)
    },
    update: function (query, data, cb){
        this.findOneAndUpdate(query, {$set: data}, {new: true}, cb)
    },
    delete: function (query, cb){
        this.findOneAndDelete(query, cb)
    }
}

const dto = mongoose.model("coll_of_products", schema);
module.exports = dto;