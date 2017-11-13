$(document).ready(function () {
    var root = 'https://swapi.co/api/starships/';

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
                tarjeta += '    data-cost_in_credits="Longitud: '+data.results[i].cost_in_credits+'" ';
                tarjeta += '    data-length="Tripulacion: '+data.results[i].length+'" ';
                tarjeta += '    data-max_atmosphering_speed="Pasajeros: '+data.results[i].max_atmosphering_speed+'" ';
                tarjeta += '    data-crew="Clase de vehiculos: '+data.results[i].crew+'" ';
                tarjeta += '    data-passengers="Clase de vehiculos: '+data.results[i].passengers+'" ';
                tarjeta += '    data-cargo_capacity="Clase de vehiculos: '+data.results[i].cargo_capacity+'" ';
                tarjeta += '    data-consumables="Clase de vehiculos: '+data.results[i].consumables+'" ';
              
                tarjeta += '    data-toggle="modal" data-target="#exampleModal">' + data.results[i].name + '</h1>';
                tarjeta += '</div>';
            }
            //console.log(tarjeta);
            $("#cruceros").html(tarjeta);
         
        },
        error: function (e) {
            console.log(e);
        },
    });

    $('#exampleModal').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('name'));
        $(this).find('.modal-body').html('<p>' + $(e.relatedTarget).data('model') + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('cost_in_credits') + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('length') + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('max_atmosphering_speed') + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('crew')  + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('passengers')  + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('cargo_capacity')  + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('consumables')  + '</p>');

    });
});