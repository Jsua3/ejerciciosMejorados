let valorMatricula = 7000000;
let opcion;
let cuotaFinal;

do {
    opcion = parseInt(prompt("Ingrese la opción de pago de matrícula:\n1 - Pago completo (5% descuento)\n2 - Pago en 2 cuotas (+2% de interés en la segunda cuota)\n3 - Pago en 3 cuotas (+2% de interés en la segunda y tercera cuota)"));

    if (opcion < 1 || opcion > 3 || isNaN(opcion)) {
        alert("Opción inválida, por favor ingrese 1, 2 o 3.");
    }
} while (opcion < 1 || opcion > 3 || isNaN(opcion));

switch (opcion) {
    case 1:
        cuotaFinal = valorMatricula * 0.95;
        alert(`Pago único con 5% de descuento: $${cuotaFinal.toFixed(2)}`);
        break;

    case 2:
        let cuotaBase2 = valorMatricula / 2;
        let segundaCuota = cuotaBase2 * 1.02;
        cuotaFinal = cuotaBase2 + segundaCuota;
        alert(`Pago en 2 cuotas:\n- Primera cuota: $${cuotaBase2.toFixed(2)}\n- Segunda cuota (2% interés): $${segundaCuota.toFixed(2)}\n- Total a pagar: $${cuotaFinal.toFixed(2)}`);
        break;

    case 3:
        let cuotaBase3 = valorMatricula / 3;
        let segundaCuota3 = cuotaBase3 * 1.02;
        let terceraCuota = segundaCuota3 * 1.02;
        cuotaFinal = cuotaBase3 + segundaCuota3 + terceraCuota;
        alert(`Pago en 3 cuotas:\n- Primera cuota: $${cuotaBase3.toFixed(2)}\n- Segunda cuota (2% interés): $${segundaCuota3.toFixed(2)}\n- Tercera cuota (con 2% de interés sobre saldo): $${terceraCuota.toFixed(2)}\n- Total a pagar: $${cuotaFinal.toFixed(2)}`);
        break;
}