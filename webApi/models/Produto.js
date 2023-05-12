const mongoose = require('mongoose')

const Produto = mongoose.model('Produto',{
    descricao : String,
    tamanho: String,
    quantidade: Number,
    referencia: String,
    valorCusto: Number,
    valorVenda: Number,
    observacao: String
})

module.exports = Produto

