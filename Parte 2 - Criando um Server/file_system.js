var http = require("http");
var fs = require("fs");
const port = 3000;

var server = http.createServer(function(req,res){
	fs.readFile(__dirname + '/html/file_system.html', function(err, html){
		res.writeHead(200,{"Content-Type" : "text/html"});
		res.write(html);
		res.end();
	});
});
server.listen(port, function(){
	console.log("Servidor rodando na porta : "+ port);
});