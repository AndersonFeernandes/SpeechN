var http = require("http");
var fs = require("fs");
var readSync = require("./test_read_sync");
var readAsync = require("./test_read_async");
var file = "./benchmark_files/node.exe";
var stream = fs.createWriteStream(file);
var download = "http://nodejs.org/dist/latest/win-x64/node.exe";
http.get(download, function(res){
    console.log("Fazendo download NodeJS");
    res.on("data",function(data){
        stream.write(data);
    })

    res.on("end", function(){
        stream.end();
        console.log("Download Finalizado");
        readAsync(file);
        readSync(file);
    })
});