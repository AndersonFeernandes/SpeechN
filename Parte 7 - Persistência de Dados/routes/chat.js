module.exports = function(app){
    var auth = require('./../middleware/auth')
    var chat = app.controllers.chat;
    app.get("/chat/:sala", auth, chat.index);
}