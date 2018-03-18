
// Principais Necessidades do Sistema
const express = require("express")
, load = require("express-load")
, session = require("express-session")
, cookieParser = require("cookie-parser")
, bodyParse = require("body-parser")
, methodOverride = require("method-override")
, error = require('./middleware/error')
, app = express();
 
const port = 3000;

//Configurando Express / Node
app.set("views",__dirname + '/views');
app.set("view engine", "ejs");
app.use(cookieParser("FWG_speechn"));
app.use(session({
  secret: "FWGSpeechN12032015",
  name:"FWG_speechn",
  resave: true,
  saveUninitialized: true
}));
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

load('models')
  .then('controllers')
  .then('routes')
  .into(app);


/* Pagina 404 no express não é um erro, portanto, quando não há comandos para o 
   express resolver, vai executar o app.use do error.                         */
app.use(error.notFound);
app.use(error.serverError);
  
  
app.listen(port, function(){
  console.log("SpeechN rodando!");
})