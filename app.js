/** packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser")

/** app configuration */
const app = express();
const port = config.get("server-port")
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    { extended: true }
)

app.use(jsonParser)
app.use(urlEncodedParser)

app.get("/", (req, res, next) => {
    res.send("Buy your products here")
})

/** product Routes */
const productRoutes = require("./routes/product.routes");
productRoutes(app)

app.listen(port, () => {
    console.log(`Server is running by port ${port}`);
})