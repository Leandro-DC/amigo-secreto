// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//CREAR UN ARRAY PARA ALMACENAR LOS NOMBRES.
/*Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados.*/

let amigos = [];

//IMPLEMENTA UNA FUNCIÓN PARA AGREGAR AMIGOS.

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
    actulizarLista();
    return;
}

function limpiarCaja() {
    let valorCaja = document.getElementById("amigo").value = "";
}

//IMPLEMENTA UNA FUNCIÓN PARA ACTUALIZAR LA LISTA DE AMIGOS.

/*OBTENER EL ELEMENTO DE LA LISTA: Utilizar document.getElementById() o document.querySelector() para 
seleccionar la lista donde se mostrarán los amigos.*/

/*LIMPIAR LA LISTA EXISTENTE: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados 
al actualizar.*/

/*ITERAR SOBRE EL ARREGLO: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) 
para cada título.*/

/*AGREGAR ELEMENTOS A LA LISTA: Para cada amigo, crear un nuevo elemento de lista.*/

function actulizarLista() {
    let listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaDeAmigos.appendChild(li);
    }
    return;
}

//IMPLEMENTA UNA FUNCIÓN PARA SORTEAR LOS AMIGOS

/*VALIDAR QUE HAYA AMIGOS DISPONIBLES: Antes de sortear, comprobar si el array amigos no está vacío.
-Agrego un alert al if por si no hay nombres ingresados.
-Agrego un else if con un alert, para anunciar que haya al menos 2 participantes para el sorteo*/

/*GENERAR UN ÍNDICE ALEATORIO: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio 
del arreglo.*/

/*OBTENER EL NOMBRE SORTEADO: Utilizar el índice aleatorio para acceder al nombre correspondiente en 
el arreglo.*/

/*MOSTRAR EL RESULTADO: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  
e innerHTML para mostrar el amigo sorteado.*/

function sortearAmigo() {

    if (amigos.length === 0) {
        alert("Ingrese nombres de sus amigos para sortear!");
        return;
    } else if(amigos.length < 2) {
        alert("Se necesitan, minimo 2 nombres para sortear!")
        return;
    }

    let sorteoAmigo = Math.floor(Math.random()*amigos.length);
    let amigoSecreto = amigos[sorteoAmigo];

    let resultadoSorteo = document.getElementById("resultado");
    resultadoSorteo.innerHTML = `Tu amigo secreto es ${amigoSecreto}!`;
}