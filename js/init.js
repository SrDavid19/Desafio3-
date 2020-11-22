$('.carousel').carousel()

function mostrarError(){
    swal("Opps", "Al parecer no quedan más productos ver", "warning");
}

function mostrarSucces(){
    swal("¡Gracias por todo!", "Tus comentarios han sido enviados", "success");
}

function mostrarSuccesWWU(){
    swal("¡Excelente!", "Hemos recibido tus datos, esperamos verte pronto", "success");
}

function mostrarBusqueda(){
    swal("¡Vaya!", "Parece que no se han encontrado coincidencias", "error");
}
$(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
    });
