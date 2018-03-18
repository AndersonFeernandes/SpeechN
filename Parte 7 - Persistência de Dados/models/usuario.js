var mongoose = require('mongoose');
module.exports = function(app){

    var contato = new mongoose.Schema({
        nome: String,
        email: String
    });

    var usuario = new mongoose.Schema({
        nome: {type: String, required: true},
        email: {type: String, required: true, index: {unique: true}},
        contatos: [contato]
    });
    return mongoose.model('usuarios', usuario);
}