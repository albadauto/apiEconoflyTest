const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();
require("../models/usuario.model");
const usuarioModel = mongoose.model("usuario");


module.exports.verifyLogin = async (request, response) => {
    try{
        const {nome, senha} = request.body;
        const result = await usuarioModel.find({nome: nome, senha:senha});
        if (result.length > 0){
            const token = jwt.sign({id: result._id }, process.env.SECRETJWT, {expiresIn: 5000});
            response.status(200).json({
                auth: true,
                token
            })
        }else{
            response.status(404).json({
                auth: false,
                message: "Login ou senha incorretos"
            })
        }
    }catch(err){
        console.log(err);
    }
}

module.exports.insertAdminAccount = async (request, response) => {
    try{
        if(await usuarioModel.create({nome: "root", senha:"root"})){
            response.status(200).json({message:"criado"})
        }
    }catch(err){
        console.log(err);
    }
}