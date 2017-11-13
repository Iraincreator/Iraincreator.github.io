$(document).ready(function () {
    var root = 'https://swapi.co/api/planets/';

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
                tarjeta += '    data-rotation_period="Modelo: '+data.results[i].rotation_period+'" ';
                tarjeta += '    data-orbital_period="Longitud: '+data.results[i].orbital_period+'" ';
                tarjeta += '    data-diameter="Tripulacion: '+data.results[i].diameter+'" ';
                tarjeta += '    data-climate="Pasajeros: '+data.results[i].climate+'" ';
                tarjeta += '    data-gravity="Clase de vehiculos: '+data.results[i].gravity+'" ';
                tarjeta += '    data-terrain="Clase de vehiculos: '+data.results[i].terrain+'" ';
                tarjeta += '    data-surface_water="Clase de vehiculos: '+data.results[i].surface_water+'" ';
                tarjeta += '    data-population="Clase de vehiculos: '+data.results[i].population+'" ';
              
                tarjeta += '    data-toggle="modal" data-target="#exampleModal">' + data.results[i].name + '</h1>';
                tarjeta += '</div>';
            }
            //console.log(tarjeta);
            $("#planetas").html(tarjeta);
         
        },
        error: function (e) {
            console.log(e);
        },
    });

    $('#exampleModal').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('name'));
        $(this).find('.modal-body').html('<p>' + $(e.relatedTarget).data('rotation_period') + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('orbital_period') + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('diameter') + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('climate') + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('gravity')  + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('terrain')  + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('surface_water')  + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('population')  + '</p>');

    });
});