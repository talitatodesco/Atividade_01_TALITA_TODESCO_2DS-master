
const express = require('express');
const routemusica = require('./route/routeMusica');

const app = express();


app.use('/', routemusica)

app.listen(3000, ()=>{
    console.log('Servidor Rodando!!')
})
