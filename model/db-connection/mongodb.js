// user: my_first_db
// password: Y8wDYGvE38X7Ig8L

const mongoose = require("mongoose");
const config = require("config");

const mongodbInfo = config.get("db-connection.mongodb")

const connStr = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority`

module.exports = () => {
    mongoose.connect(connStr);

    mongoose.connection.on("connected", () => {
        console.log("Mongodb server connected");
    })

    mongoose.connection.on("disconnected", () => {
        console.log("Mongodb server disconnected");
    })

    mongoose.connection.on("error", () => {
        console.log("Mongodb server connection error!"); 
    })

    mongoose.connection.on("SIGINT", () => {
        mongoose.connection.close(()=>{
        console.log("Mongodb server shutting down");
    })
})
}