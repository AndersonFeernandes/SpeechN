var fs = require("fs");
var checkFolder = function(){
    fs.readdir(__dirname, function(err, folder){
        if(err){
            return err;
        }

        folder.forEach(function(file){
            read(file);
        });

    });
};

var read = function(file){
    var path = "./" + file;
    fs.stat(path, function(err, stat){
        if(err){
            return err;
        }

        if(stat.isFile()){
            console.log("%s %d bytes",file, stat.size);
        }
    });
};
