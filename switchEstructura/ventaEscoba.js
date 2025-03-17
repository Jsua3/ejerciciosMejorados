function obtenerTipoDeEscoba() {
    let tipo;
    do {
        tipo = prompt("Seleccione el tipo de escoba:\n1 - Dura\n2 - Suave\n3 - Cepillo");
        if (!["1", "2", "3"].includes(tipo)) {
            alert("Por favor, seleccione una opción válida (1, 2 o 3).");
        }
    } while (!["1", "2", "3"].includes(tipo));
    return tipo;
}

function obtenerMaterialDeEscoba() {
    let material;
    do {
        material = prompt("Seleccione el material de su escoba:\n1 - Cerdas sintéticas\n2 - Cerdas naturales");
        if (!["1", "2"].includes(material)) {
            alert("Por favor, seleccione una opción válida (1 o 2).");
        }
    } while (!["1", "2"].includes(material));
    return material;
}

function obtenerCantidadDeEscobas() {
    let cantidad;
    do {
        cantidad = parseInt(prompt("Ingrese la cantidad de escobas (mínimo 3, máximo 30):"));
        if (isNaN(cantidad) || cantidad < 3 || cantidad > 30) {
            alert("Cantidad inválida. Debe ser un número entre 3 y 30.");
        }
    } while (isNaN(cantidad) || cantidad < 3 || cantidad > 30);
    return cantidad;
}

function calcularPrecioBase(tipo, material) {
    switch (tipo) {
        case "1":
            return material === "1" ? 8000 : 10000;
        case "2":
            return material === "1" ? 12000 : 15000;
        case "3":
            return material === "1" ? 5000 : 7000;
        default:
            alert("Tipo de escoba inválido");
            return 0;
    }
}

function generarResumen(tipo, material, cantidad, mangoLargo, ganchoPunta, total) {
    return `Resumen de su compra:
    - Tipo de escoba: ${tipo === "1" ? "Dura" : tipo === "2" ? "Suave" : "Cepillo"}
    - Material: ${material === "1" ? "Cerdas sintéticas" : "Cerdas naturales"}
    - Cantidad: ${cantidad}
    - Mango largo: ${mangoLargo ? "Sí" : "No"}
    - Gancho en punta: ${ganchoPunta ? "Sí" : "No"}
    - Total a pagar: $${total}`;
}

// Variables globales
const MangoLargoBase = 2000;
const ganchoEnPuntaBase = 500;

// Ejecución del programa
let tipo = obtenerTipoDeEscoba();
let material = obtenerMaterialDeEscoba();
let cantidad = obtenerCantidadDeEscobas();

let mangoLargo = confirm("¿Desea incluir mango largo en su escoba? (+$2000 por unidad)");
let ganchoPunta = confirm("¿Desea incluir gancho en punta? (+$500 por unidad)");

let precioBase = calcularPrecioBase(tipo, material);

if (precioBase > 0) {
    let total = precioBase * cantidad;
    if (mangoLargo) total += MangoLargoBase * cantidad;
    if (ganchoPunta) total += ganchoEnPuntaBase * cantidad;

    alert(generarResumen(tipo, material, cantidad, mangoLargo, ganchoPunta, total));
}
