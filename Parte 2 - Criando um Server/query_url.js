var http = require("http");
var url = require("url");
const port = 3000;

var server = http.createServer(function(req, res){
		res.writeHead(200,{"Content-Type" : "text/html"});
		res.write("<h1>Dados pela Query</h1>");
		var result = url.parse(req.url, true);
		for( var key in result.query){
			res.write("<h2>" + key + ": " + result.query[key]+"</h2>");
		}
		res.end();
});

server.listen(port,function(){
	console.log("Server rodando na porta: " + port);
});