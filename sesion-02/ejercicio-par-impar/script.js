const btn = document.getElementById("btn-agregar"),
    par = document.getElementById("par"),
    impar = document.getElementById("impar"),
    lista = document.getElementById("lista");

let pares = 0, impares = 0;

const agregarNumero = _ => {
    const li = document.createElement("li"), numero = document.getElementById("input-numero").value;

    (numero % 2 === 0) ? par.innerHTML = ++pares : impar.innerHTML = ++impares;

    li.textContent = numero;
    lista.appendChild(li);
}

btn.addEventListener("click", agregarNumero);