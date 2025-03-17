const montoMinimo = 10000;
const montoMaximo = 1000000;

function seleccionarCarrera() {
    let carrera;
    do {
        carrera = parseInt(prompt("Seleccione la carrera:\n1 - Carrera 1\n2 - Carrera 2"), 10);
        if (![1, 2].includes(carrera)) {
            document.write("<p>Por favor, seleccione una opción válida (1 o 2).</p>");
        }
    } while (![1, 2].includes(carrera));
    return carrera;
}

function seleccionarTipoApuesta() {
    let tipoApuesta;
    do {
        tipoApuesta = parseInt(prompt("Seleccione el tipo de apuesta:\n1 - Ganador de la carrera\n2 - Posiciones exactas (1ro y 2do)"), 10);
        if (![1, 2].includes(tipoApuesta)) {
            document.write("<p>Por favor, seleccione una opción válida (1 o 2).</p>");
        }
    } while (![1, 2].includes(tipoApuesta));
    return tipoApuesta;
}

function ingresarMontoApuesta() {
    let montoApuesta;
    do {
        montoApuesta = parseInt(prompt(`Ingrese el monto de la apuesta (mínimo $${montoMinimo}, máximo $${montoMaximo}):`), 10);
        if (isNaN(montoApuesta) || montoApuesta < montoMinimo || montoApuesta > montoMaximo) {
            document.write(`<p>El monto ingresado no es válido. Debe estar entre $${montoMinimo} y $${montoMaximo}.</p>`);
        }
    } while (isNaN(montoApuesta) || montoApuesta < montoMinimo || montoApuesta > montoMaximo);
    return montoApuesta;
}

function registrarApuestaEnCarrera() {
    const carrera = seleccionarCarrera();
    const tipoApuesta = seleccionarTipoApuesta();
    const montoApuesta = ingresarMontoApuesta();

    document.write(`<p>Ha seleccionado la Carrera ${carrera}.</p>`);

    if (tipoApuesta === 1) {
        const pilotoGanador = prompt("Ingrese el nombre del piloto al que apuesta como ganador:");
        document.write(`<p>Ha apostado $${montoApuesta} al piloto ${pilotoGanador} como ganador de la carrera.</p>`);
    } else if (tipoApuesta === 2) {
        const pilotoPrimero = prompt("Ingrese el nombre del piloto en 1er lugar:");
        const pilotoSegundo = prompt("Ingrese el nombre del piloto en 2do lugar:");
        document.write(`<p>Ha apostado $${montoApuesta} a las posiciones exactas:</p>
                        <p>1ro: ${pilotoPrimero}</p>
                        <p>2do: ${pilotoSegundo}</p>`);
    }
}

registrarApuestaEnCarrera();

