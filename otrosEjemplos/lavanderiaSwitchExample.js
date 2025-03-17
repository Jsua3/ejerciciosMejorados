// Precios por tipo de servicio
const precioLavadoBasico = 2000;
const precioLavadoPremium = 4000;

// Importamos 'readline' para leer desde consola
const readline = require('readline');

// Creamos interfaz para entrada/salida por consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función de cálculo de costo usando switch
function calcularCosto(servicio, cantidad) {
    let costoTotal;

    // Validar cantidad de piezas
    if (cantidad < 1 || cantidad > 20) {
        console.log("Cantidad inválida, debes seleccionar entre 1 y 20 piezas.");
        rl.close();
        return;
    }

    // Evalúa el tipo de servicio seleccionado
    switch(servicio) {
        case "basico":
            costoTotal = precioLavadoBasico * cantidad;
            break;

        case "premium":
            costoTotal = precioLavadoPremium * cantidad;
            break;

        default:
            console.log("Tipo de servicio seleccionado no válido. (Elige 'basico' o 'premium')");
            rl.close();
            return;
    }

    // Mostramos el resultado
    console.log(`El costo total del lavado seleccionado es: \$${costoTotal}`);
    rl.close();
}

// Captura de datos desde la consola
rl.question("Selecciona el tipo de servicio ('basico' o 'premium'): ", function(servicio) {
    servicio = servicio.toLowerCase();

    rl.question("Ingresa la cantidad de piezas (1-20): ", function(inputCantidad) {
        const cantidad = parseInt(inputCantidad);

        calcularCosto(servicio, cantidad);
    });
});

// Control para cerrar el proceso
rl.on("close", function() {
    process.exit(0);
});