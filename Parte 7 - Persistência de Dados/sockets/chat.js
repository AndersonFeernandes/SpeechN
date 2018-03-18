module.exports = function(io){
    var crypto = require("crypto");
    var redis = require('redis').createClient();
    var sockets = io.sockets;
    const onlines = {};
    sockets.on('connection', function(client){
        var session = client.handshake.session
        , usuario = session.usuario;

        
        onlines[usuario.email] = usuario.email;
        for (var email in onlines){
            client.emit('notify-onlines', email);
            client.broadcast.emit('notify-onlines',email);
        }
        
        client.on('send-server', function(msg){
            var msg = "<b>" + usuario.nome + ":</b> " + msg + "<br>";
            var sala = session.sala;
            redis.lpush(sala,msg);
            var data = {email: usuario.email, sala: sala};
            client.broadcast.emit('new-message',data);
            sockets.in(sala).emit('send-client',msg);
        })


        client.on('join', function(sala){
            if(sala){
                sala = sala.replace('?','');
            } else {
                var timestamp = new Date().toString();
                var md5 = crypto.createHash('md5');
                sala = md5.update(timestamp).digest('hex');
            }
            session.sala = sala;
            client.join(sala);

            var msg = "<b>"+usuario.nome+": </b> entrou. <br />";
            redis.lpush(sala,msg,function(err, res){
                redis.lrange(sala,0,-1,function(err,msgs){
                    msgs.forEach(function(msg){
                        sockets.in(sala).emit('send-client',msg);
                    });
                });
            });
        });

        client.on('disconnect', function(){
            var sala = session.sala;
            var msg = "<b>" + usuario.nome + ":</b> saiu.<br>";
            redis.lpush(sala,msg);
            client.broadcast.emit("notify-offline", usuario.email);
            sockets.in(sala).emit('send-client',msg);
            client.leave(sala);
        })
    });
}
