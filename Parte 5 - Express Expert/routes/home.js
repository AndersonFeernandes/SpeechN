module.exports = function(app){
  var home = app.controllers.home;
  app.get('/',home.index);
  app.post('/logar', home.login);
  app.get('/deslogar', home.logout);
};

