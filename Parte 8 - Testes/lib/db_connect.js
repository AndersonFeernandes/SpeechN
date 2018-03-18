module.exports = function(){
    var mongoose = require('mongoose');
    var env_url = {
        "test": "mongodb://localhost/speechn_test",
        "development": "mongodb://localhost/speechn"
    };
    var url = env_url[ process.env.NODE_ENV || "development" ];
    mongoose.connect(url);
    return mongoose;
}