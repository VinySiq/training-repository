/*criando um servidor simples*/

const http = require('http');

http.createServer((require, response) => {
    response.writeHead(200, {
        'Content-Type':'text/plain'
   })
   response.write('Hello world!');
   response.end();
}).listen(1337, console.log("servidor funcionando"));

