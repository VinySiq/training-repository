/* integração do backend com o HTML*/
/*declarando as variáveis necessárias para o processo*/

const http = require('http');
const fs = require('fs');
const port = process.env.PORT;

/* criando servidor e integrando ele com html, através de uma arrow function*/
const server = http.createServer((require, response)=>{
    fs.readFile('aula3.html', (error, arquivo)=>{
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(arquivo);
        return response.end();
    })

})

server.listen(port || 3000, ()=>{
    console.log('Servidor funcionando');
});
