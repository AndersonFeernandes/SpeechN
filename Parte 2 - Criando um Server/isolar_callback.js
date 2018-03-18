var http = require('http');
const port = 3000;

var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<h1>Hello World</h1>");
	response.end();
});

var serverStart = function(){
	console.log("Servidor rodando na porta: " + port);
}

server.listen(port, serverStart);