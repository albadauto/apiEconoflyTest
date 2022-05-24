const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/econofly")
.then(() => console.log("Banco de dados conectadoooo"))
.catch((error) => console.log(error));