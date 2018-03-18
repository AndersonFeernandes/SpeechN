var fs = require('fs');

for(var i = 1; i <= 5; i++){
    var file = __dirname + "/async_files/async-file" + i + ".txt";
    var out = fs.writeFile(file, "Olá, sou um arquivo gerado pelo metodo Async!",function(err, out){
        console.log(out);
        });     
 }