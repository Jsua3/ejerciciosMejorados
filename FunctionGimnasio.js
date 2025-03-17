function gimnasio(dias) {
    switch (dias) {
        case 15:
            document.write("su mensualidad es de 18000");
            break;
        case 30:
            document.write("su mensualidad es de 35000");
            break;
        case 90:
            document.write("su mensualidad es de 86000");
            break;
        default:
            document.write("Duración no válida. Por favor, selecciona 15, 30 o 90 días.");
            break;
    }
}
let dias = parseInt(prompt("ingrese el numero de dias que paga en el gimnasio:"));
gimnasio(dias);





