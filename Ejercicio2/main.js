//Declaramos el array donde vamos a guardar los datos del formulario
let datos = new Array();

function mostrarDatos(array) {

    for (var i = 0; i < array.length; i++) {
        var caja = document.createElement("div");
        caja.className = "contenedor";
        for (var j = 0; j < array[i].length; j++) {

            var parrafo = document.createElement("p");
            if (j == 0) {
                var texto = document.createTextNode("Nombre: " + array[i][j]);
                parrafo.appendChild(texto);
                caja.appendChild(parrafo);
            } else if (j == 1) {
                var texto = document.createTextNode("Apellidos: " + array[i][j]);
                parrafo.appendChild(texto);
                caja.appendChild(parrafo);
            } else {
                var texto = document.createTextNode("E-mail: " + array[i][j]);
                parrafo.appendChild(texto);
                caja.appendChild(parrafo);
            }


        }
        var boton = document.createElement("input");
        boton.type = "button";
        boton.id = i;
        boton.value = "ELIMINAR";

        var resultados = document.getElementById("resultados");
        resultados.appendChild(caja);
        resultados.appendChild(boton);
        resultados.innerHTML = resultados.innerHTML + "<hr>";



    }

}

function comprobarCampos() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;

    if (nombre.length != 0 && apellidos.length != 0 && email.length != 0) {
        return true;
    }
    return false;
}

function anadir() {
    if (comprobarCampos()) {
        var nombre = document.getElementById("nombre").value;
        var apellidos = document.getElementById("apellidos").value;
        var email = document.getElementById("email").value;

        datos.push([nombre, apellidos, email]);
        limpiarDatos();
        mostrarDatos(datos);
        // alert(datos.length);
    } else {
        alert("Debes introducir todos los campos");
    }

}

function borrar() {
    alert("Has pulsado borrar");
    // var element = document.getSelection.name;
    // alert(element);
    // var id = elemento.id;
    // datos.slice(id, 1);
    // limpiarDatos();
    // mostrarDatos(datos);

}

function limpiarDatos() {
    var contenedor = document.getElementById("resultados");
    contenedor.innerHTML = "";

}