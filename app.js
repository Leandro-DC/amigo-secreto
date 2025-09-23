// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//CREAR UN ARRAY PARA ALMACENAR LOS NOMBRES
/*Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados.*/

let amigos = [];

//IMPLEMENTA UNA FUNCIÓN PARA AGREGAR AMIGOS
/*CAPTURAR EL VALOR DEL CAMPO DE ENTRADA: Utilizar document.getElementById o document.querySelector para 
obtener el texto ingresado por el usuario.
-agrego .value para dar valor de string.
-agrego .trim() para que me borre los espacios agregados*/

/*VALIDAR LA ENTRADA: Implementar una validación para asegurarse de que el campo no esté vacío. 
Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
-agrego un if*/

/*ACTUALIZAR EL ARRAY DE AMIGOS: Si el valor es válido, añadirlo al arreglo que almacena los nombre 
de amigos usando el método.push().
-agrego */

/*LIMPIAR EL CAMPO DE ENTRADA: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
-creo funcion limpiarCaja 
-agrego limpiarCaja dentro de funcion agregarAmigos*/

function agregarAmigo() {
    let nombreIngresado = ((document.getElementById("amigo").value)).trim();
    console.log(nombreIngresado);
    if (nombreIngresado === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombreIngresado);
    console.log(amigos);
    limpiarCaja();
    return;
}

function limpiarCaja() {
    let valorCaja = document.getElementById("amigo").value = "";
}