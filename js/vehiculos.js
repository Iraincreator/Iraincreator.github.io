$(document).ready(function () {
    var root = 'https://swapi.co/api/vehicles/';

    $.ajax({
        url: root,
        method: 'GET',
        success: function (data) {
            //alert(data);
            console.log(data);
            var tarjeta = '';
             for (var i = 0; i < data.results.length; i++) {
                tarjeta += '<div class="col-md-12">';
                tarjeta += '    <h1 ';
                tarjeta += '    data-name="Nombre: '+data.results[i].name+'" ';
                tarjeta += '    data-model="Modelo: '+data.results[i].model+'" ';
                tarjeta += '    data-length="Longitud: '+data.results[i].length+'" ';
                tarjeta += '    data-crew="Tripulacion: '+data.results[i].crew+'" ';
                tarjeta += '    data-passengers="Pasajeros: '+data.results[i].passengers+'" ';
                tarjeta += '    data-vehicle_class="Clase de vehiculos: '+data.results[i].vehicle_class+'" ';
              
                tarjeta += '    data-toggle="modal" data-target="#exampleModal">' + data.results[i].name + '</h1>';
                tarjeta += '</div>';
            }
            //console.log(tarjeta);
            $("#vehiculos").html(tarjeta);
         
        },
        error: function (e) {
            console.log(e);
        },
    });

    $('#exampleModal').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('name'));
        $(this).find('.modal-body').html('<p>' + $(e.relatedTarget).data('model') + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('length') + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('crew') + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('passengers') + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('vehicle_class')  + '</p>');

    });
});