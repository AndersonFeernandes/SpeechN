var fs = require("fs");

for(var i = 1; i <= 5; i++){
    var file = __dirname + "/sync_files/sync-file" + i + ".txt";
    var out = fs.writeFileSync(file, "Olá eu sou um sync!");
    console.log(out);
}