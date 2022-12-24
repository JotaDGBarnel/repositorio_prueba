var usuario = new Object()
var usuarioJSON;

function crearUsuario(){
    nombre = document.getElementById("nomb").value;
    apellido = document.getElementById("ape").value;
    if (document.getElementById("si").value != null) {
        mayor = true;
    }
    else {
        mayor = false;
    }
    
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.mayor = mayor;

}

function convertir(){
    usuarioJSON = JSON.stringify(usuario);
}

function enviar()