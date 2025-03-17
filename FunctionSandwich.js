let tamaño = prompt("ingrese el tamaño del sandwich(pequeño o grande)");
let adicionales = prompt("ingrese los ingredientes que desea adicionar(tocineta, jalapeño, pavo, queso).");

let precioBase = tamaño === "pequeño" ? 6000 : 12000;
let precioAdicionales = 0;



// adicionales
if (adicionales.includes("tocineta")) {
    precioAdicionales += 3000;
}
if (adicionales.includes("pavo")) {
    precioAdicionales += 3000;
}
if (adicionales.includes("queso")) {
    precioAdicionales += 2500;
}

// Calcular total
let totalPagar = precioBase + precioAdicionales;


document.write(`El valor total de su pedido es: $${totalPagar}`);


//minusculas
//adicionales = adicionales.toLowerCase();