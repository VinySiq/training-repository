/*caso queira trabalhar com a URL*/

const http = require('http');
const url = require('url');
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type':'text/html'});
    /* aqui que se inicia as definições de rota; pode usar text/plain para texto ou text/html ou text/json*/
    response.write(require.url);
    const p = url.parse(require.url,true).query;
    response.write('<\br>'+ p.nome);
    response.write('<\br>'+ p.curso);
    response.end();
});

/*para fazer o servidor rodar*/

servidor.listen(porta, host, ()=>{
    console.log('Servidor funcionando!')
});