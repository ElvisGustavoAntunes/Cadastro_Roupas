const router = require('express').Router();
const Produto = require('../models/Produto');

//create Cadastrando
router.post('/', async (req,res) =>{
    const {descricao,tamanho,quantidade,referencia,valorCusto,valorVenda,observacao} = req.body
    if(!descricao){
        res.status(422).json({erro: 'A descricao do produto é obrigatoria'})
        return;
    }
    if(!tamanho){
        res.status(422).json({erro: 'O tamanho do produto é obrigatorio'})
    }
    if(!quantidade){
        res.status(422).json({erro: 'A quantidade do produto é obrigatoria'})
        return;
    }
    if(!quantidade){
        res.status(422).json({erro: 'A referencia do produto é obrigatoria'})
        return;
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
    try{
        await Produto.create(produto)
        res.status(201).json({message : 'Produto Cadastrado com Sucesso'})
    }catch(error){
        res.status(500).json({error: error})
    }
})
//GET Leitura dos Dados
router.get('/', async (req,res) =>{

    try{
        const produtos = await Produto.find()
        res.status(200).json(produtos)
    }catch(error){
        res.status(500).json({error: error})
    }
})
router.get('/:id', async (req,res) =>{
    const id = req.params.id;

    try{
        const produtos = await Produto.findOne({_id: id})
        if(!produtos){
            res.status(422).json('{Mensage: Produto não Cadastrado }');
            return;
        }
        
        res.status(200).json(produtos)
    }catch(error){
        res.status(500).json({error: error})
    }

})
module.exports = router;