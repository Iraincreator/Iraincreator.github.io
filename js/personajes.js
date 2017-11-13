$(document).ready(function () {
    var root = 'https://swapi.co/api/people/';

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
                tarjeta += '    data-name="'+data.results[i].name+'" ';
                tarjeta += '    data-height="Altura: '+data.results[i].height+'" ';
                tarjeta += '    data-mass="Peso: '+data.results[i].mass+'" ';
                tarjeta += '    data-hair_color="Color de pelo: '+data.results[i].hair_color+'" ';
                tarjeta += '    data-skin_color="Color de piel: '+data.results[i].skin_color+'" ';
                tarjeta += '    data-eye_color="Color de ojos: '+data.results[i].eye_color+'" ';
                tarjeta += '    data-birth_year="Año de nacimiento: '+data.results[i].birth_year+'" ';
                tarjeta += '    data-gender="Genero: '+data.results[i].gender+'" ';
              
                tarjeta += '    data-toggle="modal" data-target="#exampleModal">' + data.results[i].name + '</h1>';
                tarjeta += '</div>';
            }
            //console.log(tarjeta);
            $("#personajes").html(tarjeta);
         
        },
        error: function (e) {
            console.log(e);
        },
    });

    $('#exampleModal').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('name'));
        $(this).find('.modal-body').html('<p>' + $(e.relatedTarget).data('height') + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('mass') + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('hair_color') + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('skin_color') + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('eye_color')  + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('birth_year') + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('gender') + '</p>');
    

    });
});