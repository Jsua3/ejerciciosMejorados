// Precios por tipo de servicio
const precioLavadoBasico = 2000;
const precioLavadoPremium = 4000;


function calcularCosto(servicio, cantidad) {
    let costoTotal;

    // Validar cantidad de piezas
    if (cantidad < 1 || cantidad > 20) {
        document.error("Cantidad inválida, debes seleccionar entre 1 y 20 piezas.");
        return;
    }

    // Calcular el costo usando switch
    switch(servicio) {
        case "basico":
            costoTotal = precioLavadoBasico * cantidad;
            break;

        case "premium":
            costoTotal = precioLavadoPremium * cantidad;
            break;

        default:
            console.error("Tipo de servicio seleccionado no válido.");
            return;
    }


    document.write(`El costo total del lavado seleccionado es: $${costoTotal}`);
}


let tipoServicio = prompt("Selecciona el tipo de servicio (basico/premium):").toLowerCase();
let cantidadPiezas = parseInt(prompt("Ingresa la cantidad de piezas (1-20):"));

calcularCosto(tipoServicio, cantidadPiezas);