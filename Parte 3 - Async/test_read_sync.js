var fs = require("fs");

var readSync = function(file){
    console.log("Realizando leitura Sync");
    var start = new Date().getTime();
    fs.readFileSync(file);
    var end = new Date().getTime();
    console.log("Bloqueio síncromo: " + (end - start) + "ms");
};

module.exports = readSync;