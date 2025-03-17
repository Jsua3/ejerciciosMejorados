// funcion - bloque de codigo -accion
let numero1 = 2
let numero2 = 3 // sin parametros y sin retorno
function sumar(){
    // implementacion
    let sumar = numero1 + numero2
    console.log(sumar)
}
sumar ()
sumar ()

function mostrarMensaje(){
    console.log("hola..")
    for (let index = 0; index < 4; index++){
        console.log(index)
    }
}
mostrarMensaje()