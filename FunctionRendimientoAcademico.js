function promedio(nota1, nota2, nota3, nota4, nota5) {
    let matematica = parseInt(prompt("ingrese su nota de matematica"));
    let quimica = parseInt(prompt("ingrese su nota de quimica"));
    let biologia = parseInt(prompt("ingrese su nota de biologia"));
    let fisica = parseInt(prompt("ingrese su nota de fisica"));
    let informatica = parseInt(prompt("ingrese su nota de informatica"));

    //calculo0
    let promedio = (matematica + quimica + biologia + fisica + informatica) / 50 * 100;

    if (promedio >= 0 && promedio <= 59.9) {
        document.write("Mala nota");

    } else if (promedio >= 60 && promedio <= 80) {
        document.write("buena nota");

    } else if (promedio >= 80) {
        document.write("Excelente nota");

    }
}
promedio();











































// switch (promedio) {
//     case "mala nota":
//         if (promedio >= 0 && promedio <= 59.9) {
//             document.write("Mala nota");
//         }
//         break;
//     case "buena nota":
//         if (promedio >= 60 && promedio <= 80) {
//             document.write("buena nota");
//         }
//         break;
//     case "Excelente nota":
//         if (promedio >= 80) {
//             document.write("Excelente nota");
//         }
//         break;
//
//}

