const mongoose = require("mongoose");
require("../models/produto.model");
const produtoModel = mongoose.model("produto");

module.exports.insertProduct = async (request, response) => {
    try{
        const {nome, preco, tipo, empresa} = request.body;
        const inserted = await produtoModel.create({nome:nome, preco:preco, tipo:tipo, empresa:empresa})
        if (inserted){
            response.status(200).json({
                isInserted: true,
                message:"Produto Enviado!"
            })
        }
    }catch(err){
        console.log(err);
    }
}


module.exports.listAllProducts = async (request, response) => {
    try{
        const result = await produtoModel.find();
        if (result.length > 0){
            response.json({error:false, result});
        }else{
            response.json({error:true, message:"Nada encontrado!"});
        }
    }catch(err){
        console.log(err);
    }
}