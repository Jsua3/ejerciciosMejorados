

function verificarDefecto(modelo) {
    switch (modelo) {
        case "119":
        case "179":
        case "189":
        case "195":
        case "221":
        case "780":
            document.write("el auto esta defectuoso, llevar a garantía");
            break;
        default:
            document.write("Su auto no esta defectuoso");
    }
}

let modelo = prompt("ingrese el modelo de su auto");
verificarDefecto(modelo);





// let modelo = prompt("ingrese el modelo de su auto")
// switch(modelo){
//     case "119": document.write("el auto esta defectuoso, llevar a garantía")
//         break
//     case "179": document.write("el auto esta defectuoso, llevar a garantía")
//         break
//     case "189": document.write("el auto esta defectuoso, llevar a garantía")
//         break
//     case "195": document.write("el auto esta defectuoso, llevar a garantía")
//         break
//     case "221": document.write("el auto esta defectuoso, llevar a garantía")
//         break
//     case "780": document.write("el auto esta defectuoso, llevar a garantía")
//     default: document.write("Su auto no esta defectuoso")
// }
