$(document).ready(function(){
    var pelicula1 = $("#dontlookup");

    pelicula1.mouseenter(function(){
        var idPelicula = $(this).attr("id");
        $("#titulo").text(idPelicula)
        $(this).fadeTo("fast", 0.5);    
    });
    pelicula1.mouseleave(function(){
        $("#titulo").text("Todo Películas, encuentra tu película fácil y rápido (Selecciona la Pelicula . . .)")
        $(this).fadeTo("fast", 1);
    });


    var pelicula2 = $("#BATMAN");
    pelicula2.mouseenter(function(){
        $(this).fadeTo("fast", 0.5);
    });
    pelicula2.mouseleave(function(){
        $(this).fadeTo("fast", 1);
    });


    var pelicula3 = $("#MATRIX");
    pelicula3.mouseenter(function(){
        $(this).fadeTo("fast", 0.5);
    });
    pelicula3.mouseleave(function(){
        $(this).fadeTo("fast", 1);
    });
});