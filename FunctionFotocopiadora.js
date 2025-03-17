function calcularCostoCopias(copias) {
    let costoPorCopia;
    let costoTotal;

    if (copias <= 499) {
        costoPorCopia = 120;
        costoTotal = costoPorCopia * copias;
        document.write("El valor de cada copia es de $120. ");
    } else if (copias > 499 && copias <= 750) {
        costoPorCopia = 100;
        costoTotal = costoPorCopia * copias;
        document.write("El valor de cada copia es de $100. ");
    } else if (copias >= 750 && copias <= 999) {
        costoPorCopia = 80;
        costoTotal = costoPorCopia * copias;
        document.write("El valor de cada copia es de $80. ");
    } else if (copias >= 1000) {
        costoPorCopia = 60;
        costoTotal = costoPorCopia * copias;
        document.write("El valor de cada copia es de $60. ");
    }
    document.write("El costo total es de $" + costoTotal + "");
}

let copias = parseInt(prompt("Inserte el número de copias que desea imprimir"));
calcularCostoCopias(copias);













