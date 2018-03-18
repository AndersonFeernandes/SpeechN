module.exports = function(app){
    const Usuario = app.models.usuario;
    
    var HomeController = {
        index: function(req, res){
            res.render('home/index');
        },

        login: function(req, res){
            var inputUser = req.body.usuario;
            var query = {email: inputUser.email};

            Usuario.findOne(query)
                .select('nome email')
                .exec(function(err, usuario){
                    if(usuario){
                        req.session.usuario = usuario;
                        res.redirect('/contatos');
                    } else {
                        Usuario.create(inputUser,function(err, usuario){
                            if(err){
                                res.redirect('/');
                            } else {
                                req.session.usuario = usuario;
                                res.redirect('/contatos');
                            }
                        })
                    }
                })
        },

        logout: function(req, res){
            req.session.destroy();
            res.redirect("/");
        }
    };


    return HomeController;
}