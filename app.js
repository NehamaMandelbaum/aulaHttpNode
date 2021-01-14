const http = require('http')
const products = require('./produtos.js')
//Sempre importar módulos no começo do arquivo - convenção. 

console.log('rodando o arquivo app.js')

// res = resposta e req = requisição
http.createServer(function(req, res) {
    console.log(req.url)
    if (req.url === "/produtos") {
        getProdutos(res)
    } else{
    defaultRoute(res)
    }
}).listen(8080, 'localhost')

function getProdutos(res){
    res.writeHead(200, {'Content-type': 'text/plain'}) // código 200 quer dizer que deu certo

    const stringProducts = JSON.stringify(products)

    res.end(stringProducts)
}

function defaultRoute(res) {
    res.writeHead(200, {'Content-type': 'text/plain'}) // código 200 quer dizer que deu certo
    res.end('Bem Vindo!')

}

// Para testar: acessar no navegador localhost:8080/produtos -> deve aparecer a lista de produtos
// acessar o mesmo endereço sem os produtos -> deve aparecer a mensagem default (Bem Vindo!)
//Obs: quando se trata de funções, o java script
// consegue executar uma função que está abaixo daonde ela está sendo 
// chamada. 