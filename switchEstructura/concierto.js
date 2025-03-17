
// Capacidad máxima por localidad
const capacidad = {
    general: 100,
    preferencial: 50,
    vip: 25
};

// Precios por localidad
const precios = {
    general: 50000,
    preferencial: 150000,
    vip: 300000
};

// Función para calcular el total a pagar
function calcularTotal(localidad, cantidad) {
    const precioBase = precios[localidad];
    const subtotal = precioBase * cantidad;
    const impuesto = subtotal * 0.10;
    const cargoPorServicio = cantidad * 5000;
    const total = subtotal + impuesto + cargoPorServicio;

    capacidad[localidad] -= cantidad;

    return {
        subtotal,
        impuesto,
        cargoPorServicio,
        total
    };
}

// Función de compra con interacción
function iniciarCompra() {
    let continuar;

    do {
        const localidad = prompt("Ingrese la localidad deseada (general, preferencial, vip):").toLowerCase();
        let cantidad = parseInt(prompt("Ingrese la cantidad de boletas (máximo 5):"));

        if (cantidad <= 0 || cantidad > 5) {
            console.error("Error: La cantidad de boletas debe ser entre 1 y 5");
            continue;
        }

        let costo;
        switch (localidad) {
            case "general":
            case "preferencial":
            case "vip":
                if (capacidad[localidad] < cantidad) {
                    console.error(`Error: No hay suficientes boletas disponibles en la localidad ${localidad}`);
                } else {
                    costo = calcularTotal(localidad, cantidad);
                    document.write("---------- Detalle de la Compra ----------<br>");
                    document.write(`Localidad: ${localidad}<br>`);
                    document.write(`Cantidad: ${cantidad}<br>`);
                    document.write(`Subtotal: $${costo.subtotal}<br>`);
                    document.write(`Impuesto (10%): $${costo.impuesto}<br>`);
                    document.write(`Cargo por servicio: $${costo.cargoPorServicio}<br>`);
                    document.write(`Total a pagar: $${costo.total}<br>`);
                    document.write("------------------------------------------<br>");
                }
                break;

            default:
                document.error("Error: Localidad inválida");
                break;
        }

        continuar = prompt("¿Desea realizar otra compra? (sí/no):").toLowerCase();
    } while (continuar === "si");
}

// Iniciar el proceso de compra
iniciarCompra();