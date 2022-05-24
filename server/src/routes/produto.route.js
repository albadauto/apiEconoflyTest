const { Router } = require("express");
const { insertProduct } = require("../controllers/produto.controller");
const produtoRouter = Router();


produtoRouter.post("/insertProduct", insertProduct);



module.exports = produtoRouter;