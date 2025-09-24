
let amigos = [];

function agregarAmigo() {
    let nombreIngresado = ((document.getElementById("amigo").value)).trim();

    if (nombreIngresado === "") {
        alert("Por favor, inserte un nombre!");
        return;
    }

    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regex.test(nombreIngresado)) {
        alert('El nombre solo puede contener letras!');
        return;
    }

    let nombreMinusculas = nombreIngresado.toLowerCase();
    let yaExiste = amigos.some(amigo => amigo.toLowerCase() === nombreMinusculas);
    if (yaExiste) {
        alert('Este nombre ya fue ingresado!');
        return;
    }

    amigos.push(nombreIngresado);
    limpiarCaja();
    actulizarLista();
    return;
}

function limpiarCaja() {
    let valorCaja = document.getElementById("amigo").value = "";
}

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

function sortearAmigo() {

    if (amigos.length === 0) {
        alert("Ingrese nombres de sus amigos para sortear!");
        return;
    } else if(amigos.length < 2) {
        alert("Se necesitan, minimo 2 nombres para sortear!");
        return;
    }

    let sorteoAmigo = Math.floor(Math.random()*amigos.length);
    let amigoSecreto = amigos[sorteoAmigo];

    let resultadoSorteo = document.getElementById("resultado");
    resultadoSorteo.innerHTML = `Tu amigo secreto es ${amigoSecreto}!`;
    return;
}

let inputAmigo = document.getElementById("amigo");

inputAmigo.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});