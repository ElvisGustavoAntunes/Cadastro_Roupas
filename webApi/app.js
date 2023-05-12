// config inicial
const express = require('express');
const { default: mongoose } = require('mongoose');
const produtosRoutes = require('./routes/produtosRoutes');
const app = express();


//ler json Middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json());
app.use('/produtos',produtosRoutes);


//porta
const DB_USER = 'elvisgustavoantunes'
const DB_PASSWORD = '3LaAsOOI2zOiLrqW'

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.movyesi.mongodb.net/?retryWrites=true&w=majority`,
    )
    .then(() =>{
        app.listen(3000);
        console.log("Conectado ao banco");
    })
    .catch((err) => console.log(err))