module.exports = function(io){
    var crypto = require("crypto");
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
            var sala = session.sala;
            var data = {email: usuario.email, sala: sala};
            var msg = "<b>" + usuario.nome + ":</b> " + msg + "<br>";
            client.broadcast.emit('new-message',data);
            sockets.in(sala).emit('send-client',msg);
            /*var msg = "<b>" + usuario.nome + ":</b> " + msg + "<br>";
          
            client.get('sala', function(err, sala){
                var data = {email: usuario.email, sala: sala};
                client.broadcast.emit('new-message',data);
                sockets.in(sala).emit('send-client',msg);
            })*/
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
           // client.set('sala',sala);
            client.join(sala);
        });

        client.on('disconnect', function(){
            var sala = session.sala;
            var msg = "<b>" + usuario.nome + ":</b> saiu.<br>";
            client.broadcast.emit("notify-offline", usuario.email);
            sockets.in(sala).emit('send-client',msg);
            client.leave(sala);
        })
    });
}
