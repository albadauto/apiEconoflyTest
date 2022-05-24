const express = require("express");
const app = express();
const cors = require("cors");
const usuarioRouter = require("./routes/usuario.route");
const { verifyJWT } = require("./middlewares/jwt.middleware");
const produtoRouter = require("./routes/produto.route");
require("./models/db");


//CONFIG
app.use(cors());
app.use(express.json());

//ROUTES
app.use("/login", usuarioRouter);
app.use("/products", verifyJWT, produtoRouter);

module.exports ={
    app: app
}