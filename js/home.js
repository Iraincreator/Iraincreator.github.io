
$(document).ready(function () {
    var root = 'https://swapi.co/api/films/';

    $.ajax({
        url: root,
        method: 'GET',
        success: function (data) {
            //alert(data);
            console.log(data);
            var tarjeta = '';
             for (var i = 0; i < data.results.length; i++) {
                tarjeta += '<div class="col-md-4">';
                tarjeta += '    <h1 ';
                tarjeta += '    data-title="'+data.results[i].title+'" ';
                tarjeta += '    data-sinopsis="'+data.results[i].opening_crawl+'" ';
                tarjeta += '    data-episodio="Episodio '+data.results[i].episode_id+'"';
                tarjeta += '    data-release_date="Fecha '+data.results[i].release_date+'"';
                tarjeta += '    data-director="Director '+data.results[i].director+'"';
                tarjeta += '    data-producer="Productor '+data.results[i].producer+'"';
               

                tarjeta += '    data-toggle="modal" data-target="#exampleModal">' + data.results[i].title + '</h1>';
                tarjeta += '    <p>' + data.results[i].opening_crawl + '</p>';
                tarjeta += '</div>';
            }
            //console.log(tarjeta);
            $("#peliculas").html(tarjeta);
        },
        error: function (e) {
            console.log(e);
        },
    });

	$('#exampleModal').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
        $(this).find('.modal-body').html('<p>' + $(e.relatedTarget).data('sinopsis') + '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('episodio')+ '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('release_date')+ '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('director')+ '</p>');
        $(this).find('.modal-body').append('<p>' + $(e.relatedTarget).data('producer')+ '</p>');

    });
});
