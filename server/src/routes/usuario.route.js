const { Router } = require("express");
const { verifyLogin, insertAdminAccount } = require("../controllers/usuario.controller");
const usuarioRouter = Router();


usuarioRouter.post("/verifyLogin", verifyLogin);
usuarioRouter.get("/insertAdmin", insertAdminAccount);

module.exports = usuarioRouter;