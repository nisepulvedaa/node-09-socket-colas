//Comando para establecer la conexion


var socket = io();
var label = $('#lblNuevoTicket');

//ON = ESCUCHAR
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Permidos Conexión al servidor');
});

socket.on('estadoActual', function(resp) {
    // console.log('Permidos Conexión al servidor');

    label.text(resp.actual);
});

$('button').on('click', function() {



    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });
    //console.log('click');

});