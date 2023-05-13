// config inicial
const express = require('express');
const { default: mongoose } = require('mongoose');
const produtosRoutes = require('./routes/produtosRoutes');
const app = express();
require('dotenv').config()


//ler json Middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json());
app.use('/produtos',produtosRoutes);


//Conexão
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.movyesi.mongodb.net/?retryWrites=true&w=majority`,
    )
    .then(() =>{
        app.listen(3000);
        console.log("Conectado ao banco");
    })
    .catch((err) => console.log(err))