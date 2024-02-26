function mostrardatos(){
  var nombre = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellidos").value;
  var email = document.getElementById("email").value;
  var telef = document.getElementById("telef").value;

  var mensaje = "Nombre: " + nombre + "\nApellidos: " + apellidos + "\nEmail: " + email + "\nTeléfono: " + telef;
  if (document.getElementById("comentario").value != ""){
    var comentario = document.getElementById("comentario").value;
    mensaje += "\n--------------------------\nMensajes adicionales:\n" + comentario;
    }

  if (document.getElementById("hora").value != "" && document.getElementById("fecha").value != ""){
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    mensaje += "\n--------------------------\nReunión concretada\nFecha: " + fecha + "\nHora: " + hora ;
    }

  alert(mensaje);
}

function limpiar(){
  document.getElementById("nombre").value = "";
  document.getElementById("apellidos").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telef").value = "";
}
