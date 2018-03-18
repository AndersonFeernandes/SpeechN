const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer(function(req, res){
	switch(req.url){
		case '/':
		case '/artigos': loadHTML(res,"artigos.html",200);
						 break;
		case '/contato': loadHTML(res,"contato.html",200);
				    	 break;
		default :	loadHTML(res,"erro.html",404);
				
						
	}
});

server.listen(port,function(){
	console.log("Server rodando na porta: "  + port);
})

function loadHTML(httpRes, fileName, response, path = "/"){
	fs.readFile(__dirname + path + fileName, function(err, html){
		httpRes.writeHead(response,{"Content-Type" : "text/html"});
		httpRes.end(html);
	});
}