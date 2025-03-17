const email = prompt("Ingresa tu correo");
const contraseña = prompt("ingresa tu contraseña");

email == "juanjosesua@gmail.com" && contraseña == "papayadulce2"?
    document.write(`Bienvenido de nuevo ${email} !`) :
    document.write(`el correo ${email} no existe, intentalo de nuevo`);