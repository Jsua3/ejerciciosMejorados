function diagnosticarPc() {
    let estadoPc = prompt("Describa los problemas de su PC (emite un pitido al iniciarse y el disco duro gira, emite un pitido y la unidad gira," +
        " emite un pitido y la unidad no gira, no emite un pitido y el disco duro no gira, no emite un pitido y el disco duro gira): ");
    switch (estadoPc) {
        case "emite un pitido al iniciarse y el disco duro gira":
            document.write("Está averiada. ");
            break;
        case "emite un pitido y la unidad gira":
            document.write("Póngase en contacto con el técnico de apoyo");
            break;
        case "emite un pitido y la unidad no gira":
            document.write("Verificar contactos de la unidad");
            break;
        case "no emite un pitido y el disco duro no gira":
            document.write("Traiga la computadora para repararla en la central");
            break;
        case "no emite un pitido y el disco duro gira":
            document.write("Compruebe las conexiones de altavoces");
            break;
        default:
            document.write("Estado no reconocido");
    }
}
diagnosticarPc();






