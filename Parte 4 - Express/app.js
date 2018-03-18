var express = require("express")
, load = require("express-load")
, app = express();
const port = 3000;

app.set("views",__dirname + '/views');
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

load('models')
  .then('controllers')
  .then('routes')
  .into(app);
  
app.listen(port, function(){
  console.log("SpeechN rodando!");
})