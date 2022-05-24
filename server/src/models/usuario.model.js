const {Schema, default:mongoose} = require("mongoose");
const usuarioSchema = new Schema({
    nome: {
        type: String
    },
    cpf:{
        type: String
    },
    cnpj:{
        type:String
    },
    endereco:{
        type: String
    },
    bairro:{
        type:String
    },
    telefone:{
        type: String
    },
    senha:{
        type: String
    }

})

mongoose.model("usuario", usuarioSchema);