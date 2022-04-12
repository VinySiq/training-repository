/* Server normal */
/*
const res = require('express/lib/response');
const http = require('http');
const port = process.env.PORT;

const server = http.createServer((require, response)=>{
    response.statusCode=200;
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end('Tonga da Nasa');
});
server.listen(port || 3000,()=>{console.log('Servidor rodando')} );
*/

/* Utilizando Express */

const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (require, response)=>{
    response.send('Seja bem vindo!');
});

app.get('/vinicius', (require, response)=>{
    response.send('Macaco!');
});

app.get('/tonga', (require, response)=>{
    response.send('Nasa!');
});

app.listen(port || 3000, ()=>{console.log('Servidor funcionando')});