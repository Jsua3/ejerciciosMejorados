function calcularAyuda(genero, edad) {
    let ayuda = 0;
    switch (genero) {
        case "femenino":
            if (edad > 50) {
                ayuda = 120000;
            } else if (edad >= 30 && edad <= 50) {
                ayuda = 100000;
            } else {
                ayuda = 0;
            }
            break;

        case "masculino":
            ayuda = 40000;
            break;

        default:
            console.error("El género indicado no es válido.");
    }

    return ayuda;
}

let genero = prompt("ingrese su genero:");
let edad = parseInt(prompt("ingrese su edad:")); // Convertir edad a número
let ayuda = calcularAyuda(genero, edad);

// mensaje
document.write(`El valor de ayuda mensual es: $${ayuda}.`);
