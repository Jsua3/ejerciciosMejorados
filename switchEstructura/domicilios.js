
const costoEnvio = 5000;
const minimoPedido = 23000;
let precioBase = 0;
let restaurante, cantidad;


do {
    restaurante = prompt("Seleccione el restaurante:\n1 - Hamburguesas ($25,000)\n2 - Pizzería ($85,000)\n3 - Comida China ($18,000)");
    if (!["1", "2", "3"].includes(restaurante)) {
        alert("Por favor, seleccione una opción válida (1, 2 o 3).");
    }
} while (!["1", "2", "3"].includes(restaurante));


switch (restaurante) {
    case "1":
        precioBase = 25000;
        break;
    case "2":
        precioBase = 85000;
        break;
    case "3":
        precioBase = 18000;
        break;
}


do {
    cantidad = parseInt(prompt("Ingrese la cantidad de platos:"));
    if (isNaN(cantidad) || cantidad < 1) {
        alert("Ingrese una cantidad válida de platos.");
    }
} while (isNaN(cantidad) || cantidad < 1);

// Calcular subtotal
let subtotal = cantidad * precioBase;


do {

    if (subtotal < minimoPedido) {
        alert(`El pedido mínimo es de $${minimoPedido}. Actualmente su pedido es de $${subtotal}. Ingrese más platos para completar el pedido.`);

        // Permitir al usuario ingresar más platos
        do {
            cantidad += parseInt(prompt("Ingrese la cantidad de platos adicionales:"));
            if (isNaN(cantidad) || cantidad < 1) {
                alert("Ingrese una cantidad válida de platos.");
            }
        } while (isNaN(cantidad) || cantidad < 1);


        subtotal = cantidad * precioBase;
    }
} while (subtotal < minimoPedido);


let total = subtotal + costoEnvio;


alert(`Resumen del pedido:
- Restaurante: ${(['Hamburguesas', 'Pizzería', 'Comida China'][restaurante - 1])}
- Precio por unidad: $${precioBase}
- Cantidad: ${cantidad}
- Subtotal: $${subtotal}
- Costo de envío: $${costoEnvio}
**Total a pagar: $${total}**`);