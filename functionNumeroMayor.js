

function obtenerNumeroMayor() {
    let numero1 = prompt("Ingrese el primer numero");
    let numero2 = prompt("Ingrese el segundo numero");
    let numero3 = prompt("Ingrese el tercer numero");

    let numeroMayor;

    if (numero1 > numero2 && numero1 > numero3) {
        numeroMayor = numero1;
    } else if (numero2 > numero1 && numero2 > numero3) {
        numeroMayor = numero2;
    } else {
        numeroMayor = numero3;
    }

    document.write("El numero mayor es: " + numeroMayor);
}

obtenerNumeroMayor();
