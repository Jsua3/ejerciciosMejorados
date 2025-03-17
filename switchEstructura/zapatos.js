let mod = prompt("Seleccione tipo de tenis: \n 1  Clásicos \n 2  Running  \n 3  Basketball");
let cant = parseInt(prompt("cuantos pares de tenis desea comprar? \n (entre 1 a 5 pares)"));

if (isNaN(cant) || cant < 1 || cant > 5) {
    alert("Cantidad inválida");
} else {
    let precioBase = 0;
    switch (mod) {
        case "1": precioBase = 500000;
            break;
        case "2": precioBase = 800000;
            break;
        case "3": precioBase = 1000000;
            break;
        default: alert("Modelo inválido");
            break;
    }

    if (precioBase > 0) {
        let total = precioBase * cant;
        if (cant >= 3) {
            total *= 0.9;
        }

        alert(`El total a pagar por ${cant} pares de tenis es $${total.toLocaleString()}`);
    }
}