/* //console.log("--> Hola. aca ya cargamos el archivo HTML");
let nombreCurso;

nombreCurso = "Javascript"

console.log("--> El nombre del curso es " + nombreCurso);

nombreCurso = prompt ("¿A que curso estas dictando hoy?")
nombreDelEstudiante = prompt("¿Dime el nombre del estudiante?")

console.log("--> Ingresaste el valor con el nombre del estudiante: " + nombreDelEstudiante);

alert("Hola " + nombreDelEstudiante + ", bienvenido al curso de " + nombreCurso) */

//CLASE 2

/* let nombreUsuario = prompt("Escribe tu nombre de usuario:")
console.log("La cantidad de caracteres que posee el nombre de usuario es " + nombreUsuario.length );
if (nombreUsuario.length >= 4 ) {
    console.log("Tu nombre de usuario es valido por la cantidad de caracteres");
}else{
    console.log("Tu nombre de usuario es corto");
} */

//ejemplo de descuento:

/* let precio = parseFloat(prompt ("Ingresa el monto a pagar:"))
let descuento = 0;
let total = 0;

if (precio < 2000) {
  total  =  precio
} else if (precio < 5000) {
    descuento = precio * 0.15;
} else if (precio < 10000) {
    descuento = precio * 0.25
} else {
    descuento = precio * 0.45
}

total = precio - descuento

alert ("Vas a tener que pagar un total de " + total)

if (descuento) {
    alert ("Tu descuento es de " + descuento + ", gracias por tu compra!")
} else {
    alert ("Te invitamos a comprar otros articulos para obtener el descuento!")
} */

/* //otro ejemplo:

let numeroAsignado = parseFloat(prompt ("Elegir numero: "))
let numero = numeroAsignado > 0

if (numero) {
    alert ("Tu numero ES positivo")
} else {
    alert ("Tu numero NO es positivo")
} */

let estudiantesPresentes = parseInt(prompt("Ingresar estudiantes presentes: "))

if (estudiantesPresentes > 10) {
    console.log("Se puede dar clases con los alumnos presentes.");

} else {
    console.log("No se puede dar clases con los alumnos presentes.");
}
