const router = require('express').Router();
const Produto = require('../models/Produto');


router.post('/', async (req,res) =>{
    const {descricao,tamanho,quantidade,referencia,valorCusto,valorVenda,observacao} = req.body

    if(!descricao){
        res.status(422).json({erro: 'A descricao do produto é obrigatoria'})
    }
    if(!tamanho){
        res.status(422).json({erro: 'O tamanho do produto é obrigatorio'})
    }
    if(!quantidade){
        res.status(422).json({erro: 'A quantidade do produto é obrigatoria'})
    }
    if(!quantidade){
        res.status(422).json({erro: 'A referencia do produto é obrigatoria'})
    }

    const produto = {
        descricao,
        tamanho,
        quantidade,
        referencia,
        valorCusto,
        valorVenda,
        observacao
    }

    //create
    try{
        await Produto.create(produto)
        res.status(201).json({message : 'Produto Cadastrado com Sucesso'})

    }catch(error){
        res.status(500).json({error: error})
    }

})

module.exports = router;