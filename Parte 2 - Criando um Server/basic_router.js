var http = require('http');
const port = 3000;

var server = http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	if(req.url === "/"){
		res.write("<h1>Pagina Inicial</h1>");
	} else if (req.url === "/welcome"){
		res.write("<h1>Bem Vindo</h1>");
	} else {
		res.write("<h1>Pagina não encontrada!</h1><br /><a href='/'>Voltar</a>");
	}
});

server.listen(port, function(){
	console.log("Server na porta " + port)
});