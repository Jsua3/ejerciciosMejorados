function verificarTriangulo() {
    let angulo1 = parseInt(prompt("Introduzca el ángulo 1"));
    let angulo2 = parseInt(prompt("Introduzca el ángulo 2"));
    let angulo3 = parseInt(prompt("Introduzca el ángulo 3"));

    if (angulo1 + angulo2 + angulo3 === 180) {
        document.write("es un triángulo");
    } else {
        document.write("no es un triángulo");
    }
}

verificarTriangulo();
