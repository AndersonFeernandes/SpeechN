
// Principais Necessidades do Sistema
const express = require("express")
, load = require("express-load")
, expressSession = require("express-session")
, cookieParser = require("cookie-parser")
, bodyParse = require("body-parser")
, methodOverride = require("method-override")
, error = require('./middleware/error')
, app = express()
, server = require("http").createServer(app)
, io = require("socket.io").listen(server)
, MemoryStore = require('memorystore')(expressSession)
, mongoose = require("mongoose");
 
global.db = mongoose.connect("mongodb://localhost/speechn");
mongoose.connection.on('error', function(err){
  console.log(err);
})

const port = 3000;
const KEY = 'speechn.sid';
const SECRET = 'fwg_speechn';
var store = new MemoryStore();
var cookie = cookieParser(SECRET);
var session = expressSession({
  secret: SECRET,
  name:KEY,
  resave: true,
  saveUninitialized: true,
  store: store
});
//Configurando Express / Node
app.set("views",__dirname + '/views');
app.set("view engine", "ejs");
app.use(cookie);  
app.use(session);
app.use(bodyParse.json());
app.use(bodyParse.urlencoded(
  { extended: true}
));
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}))
app.use(express.static(__dirname + "/public"));

io.use(function(socket,next){
  var data = socket.request;
  cookie(data, {}, function(err){
    var sessionID = data.signedCookies[KEY];
    store.get(sessionID, function(err, session){
      if( err || !session){
        return next(new Error('not authorized'));
      }else{
        socket.handshake.session = session;
        return next();
      }
    });
  });
});


load('models')
  .then('controllers')
  .then('routes')
  .into(app);
load('sockets')
  .into(io);


/* Pagina 404 no express não é um erro, portanto, quando não há comandos para o 
   express resolver, vai executar o app.use do error.                         */
app.use(error.notFound);
app.use(error.serverError);
  


server.listen(port, function(){
  console.log("SpeechN rodando!");
})