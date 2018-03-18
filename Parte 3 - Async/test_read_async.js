var fs = require("fs");

var readAsync = function (file){
    console.log("Realizando leitura Async");
    var start = new Date().getTime();
    fs.readFile(file);
    var end = new Date().getTime();
    console.log("Bloqueio assíncromo: " + (end - start) + "ms");
};

module.exports = readAsync;
