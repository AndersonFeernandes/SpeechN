module.exports = function(app){
    const Usuario = app.models.usuario;
    
    var ContatoController = {
        index: function(req,res){
            var _id = req.session.usuario._id;
            Usuario.findById(_id, function(err, usuario){
                var contatos = usuario.contatos;
                var resultados = { contatos: contatos };
                res.render('contatos/index', resultados);
            });
        },

        create: function(req, res){
           var _id = req.session.usuario._id;
           Usuario.findById(_id, function(err, usuario){
               var contato = req.body.contato;
               var contatos = usuario.contatos;
               contatos.push(contato);
               usuario.save(function(){
                    res.redirect("/contatos");
               });
           })
        },

        show: function(req, res){
           var _id = req.session.usuario._id;
           Usuario.findById(_id,function(err,usuario){
                var contatoID = req.params.id;
                var contato = usuario.contatos.id(contatoID);
                var resultado = { contato: contato };
                res.render('contatos/show', resultado);
           });
        },

        edit: function(req, res){
           var _id = req.session.usuario._id;
           Usuario.findById(_id, function(err, usuario){
               var contatoID = req.params.id;
               var contato = usuario.contatos.id(contatoID);
               var resultado = { contato: contato };
               res.render('contatos/edit', resultado);
           })
        },

        update: function(req, res){
           var _id = req.session.usuario._id;
           Usuario.findById(_id, function(err, usuario){
                var inputContato = req.body.contato;
                var contatoID = req.params.id;
                var contato = usuario.contatos.id(contatoID);
                contato.nome = inputContato.nome;
                contato.email = inputContato.email;
                usuario.save(function(){
                    res.redirect('/contatos');
                })
           });
        },

        destroy: function(req,res){
            var _id = req.session.usuario._id;
            Usuario.findById(_id, function(err, usuario){
                var contatoID = req.params.id;
                usuario.contatos.id(contatoID).remove();
                usuario.save(function(){
                    res.redirect('/contatos');
                })
            });
        }
    }

    return ContatoController;
}