/* function saludar(nombre) {
    alert("hola " + nombre);
}

saludar ("pedro");
saludar ("pedroquier"); */

/* Practica 1 de funciones*/

/* let nombre = prompt("ingrese nombre");
let apellido = prompt("ingrese apellido");
let serie = prompt("ingrese serie");
 function saludar(var1, var2, var3) {
    alert("Hola, "+ var1+" "+var2+ " Tu seria faborita es "+var3);
 }
saludar(nombre, apellido, serie);


 */
/* let persona = {
    nombre: "manuel",
    edad: 26,
    mascotas: [ 'perro', 'gato'] 
}

let persona2 = {
    nombre: "pablo",
    edad: 22,
    mascotas: [ 'loro', 'pez'] 
}


let personas = [persona];
console.log(personas [0].edad);
console.log(personas.length);


personas.push(persona2);
console.log(personas[1]);
console.log(personas.length); */

//PROMESAS ---------------------------------

console.log("antes de promesa...");
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(), 5000);
    })
    .then((resp) => {
    console.log("termino timeout...");
  });
console.log("despues de promesa..."); 


/* practica de objetos y arreglo ---------------------------------*/

/* let persona = {
    nombre: "manuel",
    apellidos: "mendozas",
    edad: 22,
    mascota: "perro",
    serieF: "eragon"
}
console.log(persona); 

persona.comidasF= [ "picanete", "asado" ];
console.log(persona); 


 */
