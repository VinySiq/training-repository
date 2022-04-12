/*definindo rotas*/

const http = require('http');
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type':'text/plain'});
    /* aqui que se inicia as definições de rotas*/
    if (request.url == '/'){
        response.write('Seja bem vindo!\n');
    }else if (request.url == '/tongadanasa'){
        response.write('Página de testes do Tonga\n'); 
    }else if (request.url == '/tongadanasa/boi'){
        response.write('Página de testes do boi\n'); 
    } response.end();
});

/*para fazer o servidor rodar*/

servidor.listen(porta, host, ()=>{
    console.log('Servidor funcionando!')
});