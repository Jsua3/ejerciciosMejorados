const categorias = {
    "1": {nombre: "Bestsellers", precioDia: 500},
    "2": {nombre: "Literatura", precioDia: 100},
    "3": {nombre: "Académicos", precioDia: 0}
};

let categoria, dias, precioDia = null;

// Solicitar categoría
do {
    categoria = prompt("Seleccione la categoría de libros:\n1 - Bestsellers ($500/día)\n2 - Literatura ($100/día)\n3 - Académicos (Préstamo gratuito)");

    if (categorias[categoria]) {
        precioDia = categorias[categoria].precioDia;
        if (categoria === "3") {
            alert("Préstamo gratuito para los libros académicos.");
        }
    } else {
        alert("Categoría inválida. Intente de nuevo.");
    }
} while (!categorias[categoria]);

// Si no es categoría 3, calcular total
if (categoria !== "3") {
    do {
        dias = parseInt(prompt("Ingrese cantidad de días (1-30):"));

        if (isNaN(dias) || dias < 1 || dias > 30) {
            alert("Días inválidos. Debe ser un número entre 1 y 30.");
        }
    } while (isNaN(dias) || dias < 1 || dias > 30);

    let total = precioDia * dias;

    if (dias > 10) {
        total *= 0.9; // Aplicar descuento del 10% por más de 10 días
    }

    alert(`El total a pagar es $${total}`);
} else {
    alert("¡Disfrute su libro académico gratis!");
}


// let precioDia;
// let categoria;
// let dias;
//
// do {
//     categoria = prompt("Seleccione la categoría de libros:\n1 - Bestsellers ($500/día)\n2 - Literatura ($100/día)\n3 - Académicos (Préstamo gratuito)");
//
//     if (categoria === "1") {
//         precioDia = 500;
//     } else if (categoria === "2") {
//         precioDia = 100;
//     } else if (categoria === "3") {
//         alert("Préstamo gratuito para los libros académicos.");
//         precioDia = 0;
//     } else {
//         alert("Categoría inválida. Intente de nuevo.");
//         precioDia = null;
//     }
// } while (precioDia === null);
//
// if (categoria === "3") {
//     alert("¡Disfrute su libro académico gratis!");
// } else {
//
//     do {
//         dias = parseInt(prompt("Ingrese cantidad de días (1-30):"));
//
//         if (isNaN(dias) || dias < 1 || dias > 30) {
//             alert("Días inválidos. Debe ser un número entre 1 y 30.");
//             dias = null;
//         }
//     } while (dias === null);
//
//     let total = precioDia * dias;
//
//     if (dias > 10) {
//         total *= 0.9;
//     }
//
//     alert(`El total a pagar es $${total}`);
// }