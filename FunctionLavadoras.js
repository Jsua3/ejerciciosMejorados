function costoHora(tipoLavadora) {
    if (tipoLavadora === 1) {
        return 4000;
    } else if (tipoLavadora === 2) {
        return 3000;
    } else {
        return null;
    }
}

function iniciarPrograma() {
    let tipoLavadora = parseInt(prompt("ingresar tipo de lavadora (1 o 2)"));
    if (tipoLavadora !== 1 && tipoLavadora !== 2) {
        alert("Tipo de lavadora inválido");
        return;
    }

    let cantidad = parseInt(prompt("ingresar cantidad de lavadoras"));

    let horas = parseInt(prompt("ingresar horas de uso"));

    // Llamar a las demás funciones con las entradas obtenidas
    const costoPorHora = costoHora(tipoLavadora);
    const costoBaseCalculado = costoBase(costoPorHora, cantidad, horas);
    const descuentoCalculado = descuento(cantidad, costoBaseCalculado);
    const total = costoTotal(costoBaseCalculado, descuentoCalculado);

    // Mostrar el resultado en la página
    document.write(
        `Costo total por alquilar ${cantidad} lavadoras tipo ${
            tipoLavadora === 1 ? "grande" : "pequeña"
        } por ${horas} horas: $${total}.`
    );
}

function costoBase(costoHora, cantidad, horas) {
    return cantidad * horas * costoHora; // Retorno correcto del cálculo
}

function descuento(cantidad, costoBase) {
    return cantidad > 3 ? costoBase * 0.03 : 0; // Retorno correcto según la condición
}

function costoTotal(costoBase, descuento) {
    return costoBase - descuento; // Retorno del cálculo del total
}

// Iniciar el programa
iniciarPrograma();


