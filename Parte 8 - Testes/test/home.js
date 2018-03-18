var app = require("../app");
var request = require("supertest")(app);

describe('No controller home', function() {
    it('deve retornar status 200 ao fazer GET /', function(done){
        request.get('/')
            .end(function(err, res){
                res.status.should.eql(200);
                done();
            });
    });
    it('GET "/sair" redireciona para GET "/"', (done) => {
        request.get('/deslogar').end((err, res) => {
          res.headers.location.should.eql('/');
          done();
        });
      });
    it('deve ir para rota / ao fazer POST /entrar', function(done){
        var login = {usuario: {nome: 'Teste', email: 'teste@fwg.com'}};
        request.post('/logar')
            .send(login)
            .end(function(err,res){
                res.headers.location.should.eql("/contatos");
                done();
            });
    });
});