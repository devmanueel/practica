/* console.log('Hola JS');
 let edad = 6;
 let nombre = "juan";

console.log(edad);
console.log(nombre);
 */

/* let nombre  = "juan";
let apellido = "Mendozan";
let edad = 26;
let email = "manuumendozan@gmail.com"
let dni = 42306132

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(email);
console.log(dni); */

/* let l1 = 3;
let l2 = 6;
let resultado = l1 * l2;
console.log(resultado);

/* concatenear  */

/* let nombreCliente = "Javier ";
let apellidoCliente = "Mendoza";
console.log(nombreCliente + apellidoCliente); */ 

/* var2 = 2;

let nombreCliente = prompt("ingrese nombre") ;
console.log(nombreCliente);
alert ('¡Hola, '+ nombreCliente +'!');

alert('ingrese un number'); 
let numero1 = prompt('Ingrese un numero');
let newnumero1 = parseInt(numero1);
let resultado = newnumero1 + var2;
console.log (resultado);

let text1 = prompt('Ingrese text 1');
let text2 = prompt('Ingrese text 2');
alert( text1 + " " + text2);
 */
/* var1 = "nombre de alumno";

console.log(typeof(var1));
console.log(typeof(var2));

 */

/* condicionales  */
/* let edades = 17;
if(edades >= 18) {  
    console.log("puede ingresar y puede comprar productos");
}  else if(edades >= 16 ) {
            console.log("puede ingresar pero no puede comprar product");
   }    else {
            console.log("no puede ingresar");
        }
 */

/* let num = prompt('Ingrese numero');
let texto = prompt('Ingrese texto');

if(isNaN(num)) {
    console.log("No ingreso un numero");
}   else if (num > 1000) {
    alert("El numero ingresado es mayor a mil");
    }   else if (num >=10 && num <=50 ) {
            alert("El numero ingresado esta entre 10 y 50");
        }   else {
                alert("Es un numero ingresado");
            }
if (texto === "hola"){
    console.log(texto + " Es igual a hola");
} else {
    console.log(texto + " Es distinto de hola");
} */
  
/* practica 3 de JS */

/* let productos = [ "jugo" , "carne", "deterjente", "lavandina", "fideos"];
ingreso=prompt("ingrese un articulo");
if (productos.includes(ingreso)) {
    console.log("el product ingreso ya existe");
} else {
         productos [5] = ingreso;
         console.log("el producto ya a sido ingresado corretamente");
         console.log(productos);
  } */

  /* practica 2 de JS swich */

/* 
    let fecha = new Date().getDay();
    console.log(fecha);

    switch (fecha) {
        case 0:
            alert("Hoy es domingo");
        case 1:
            alert("Hoy es lunes");
        case 2:
            alert("Hoy es martes");
        case 3: 
            alert("Hoy es miercoles");
        case 4:
            alert("Hoy es jueves");
        case 5:
            alert("Hoy es viernes");
        case 6:
            alert("Hoy es sabado");    
    } */
    let objetos = ["Varita","Libro","Lechuza","Caldero"];
    objetos.forEach(objeto => {
    console.log(objeto);
    }); 