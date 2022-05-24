const {Schema, default:mongoose} = require('mongoose');

const produtosSchema = new Schema({
    nome: {
        type: String
    },
    preco:{
        type: Number
    },
    empresa:{
        type: String
    },
    tipo:{
        type: String
    },
})

mongoose.model("produto", produtosSchema);