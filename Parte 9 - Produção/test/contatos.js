var app = require('../app');
var request = require('supertest')(app);

describe('No controller contatos', function(){
    describe('Usuario não logado', function(){
        it('deve ir para / ao fazer GET /contatos', function(done){
            request.get('/contatos').end(function(err, res){
                res.headers.location.should.eql('/');
                done();
            });
        });

        it('deve ir para / ao fazer GET /contato/1', function(done){
            request.get('/contato/1').end(function(err,res){
                res.headers.location.should.eql('/');
                done();
            });
        });

        it('deve ir para / ao fazer GET /contato/1/editar', function(done){
            request.get('/contato/1/editar').end(function(err, res){
                res.headers.location.should.eql('/');
                done();
            });
        });

        it('deve ir para / ao fazer POST /contato', function(done){
            request.post('/contato').end(function(err,res){
                res.headers.location.should.eql('/');
                done();
            });
        });

        it('deve ir para / ao fazer DELETE /contato/1', function(done){
            request.delete('/contato/1').end(function(err, res){
                res.headers.location.should.eql('/');
                done();
            });
        });

        it('deve ir para / ao fazer PUT /contato/1', function(done){
            request.put('/contato/1').end(function(err, res){
                res.headers.location.should.eql('/');
                done();
            });
        });

    });

    describe('Usuario logado', function(){
        var login = {usuario: {nome: 'Teste', email: 'teste@fwg.com'}};
        var contato = {contato: {nome: 'Teste', email: 'teste@fwg.com'}};;
        var cookie = {};

        beforeEach(function(done){
            request.post('/logar')
                .send(login)
                .end(function(err, res){
                    cookie = res.headers['set-cookie'];
                    done();
                });
        });

        it('deve retornar status 200 em GET /contatos', function(done){
            var req = request.get("/contatos");
            req.cookies = cookie;
            req.end(function(err, res){
                res.status.should.eql(200);
                done();
            });
        });

        it('deve ir para rota /contatos em POST /contato', function(done){
            var contato = {contato: {nome: "Teste", email:"teste@fwg.com"}};
            var req = request.post('/contato');
            req.cookies = cookie;
            req.send(contato).end(function(err, res){
                res.headers.location.should.eql('/contatos');
                done();
            });
        });
    });
})