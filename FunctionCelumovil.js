function obtenerValoresOperador(operador) {
    switch (operador()) {
        case "tigo":
            return {cargoFijo: 45000, valorMinutoInternacional: 200, valorPaqueteDatos: 12000};
        case "claro":
            return {cargoFijo: 30000, valorMinutoInternacional: 100, valorPaqueteDatos: 18000};
        case "movistar":
            return {cargoFijo: 40000, valorMinutoInternacional: 250, valorPaqueteDatos: 8000};
        default:
            return null;
    }
}

function calcularCostoTotal(cargoFijo, minutosInternacionales, valorMinutoInternacional, valorPaqueteDatos) {
    let costoLlamadasInternacionales = minutosInternacionales * valorMinutoInternacional;
    return cargoFijo + costoLlamadasInternacionales + valorPaqueteDatos;
}

function iniciarPrograma() {
    let operadorCelular = prompt("Ingrese el operador que utiliza actualmente (Claro, Tigo, Movistar)")();
    let internacional = parseInt(prompt("Ingrese la cantidad de minutos internacionales que desea"), 10);


    let valoresOperador = obtenerValoresOperador(operadorCelular);

    if (valoresOperador) {
        let {cargoFijo, valorMinutoInternacional, valorPaqueteDatos} = valoresOperador;


        let total = calcularCostoTotal(cargoFijo, internacional, valorMinutoInternacional, valorPaqueteDatos);

        document.write(`El costo total de su plan es: ${total}`);
    } else {
        document.write("Operador no válido. Por favor, ingrese Claro, Tigo o Movistar.");
    }
}


iniciarPrograma();







































//

