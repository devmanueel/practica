/* 1- ACCEDER A LOS ELEMENTOS 
	//GET ELEMENT BY ID
	let parrafo1 = document.getElementById('para1');
	console.log(parrafo1);
	// leer contenido
	console.log(parrafo1.textContent); */

    //QUERY SELECTOR
	/* const elementoH1 = document.querySelector("h1");
	console.log(elementoH1);
	console.log(elementoH1.textContent); */
	
	/* const lista = document.querySelector(".list");
	console.log(lista);
	console.log(lista.textContent); */
     
    /* 2 -AÑADIR ELEMENTOS AL DOM */
/* 	let listaDesordenada = document.createElement("ul");
	document.body.appendChild(listaDesordenada);

    let listaElemento1 = document.createElement("li");
	listaElemento1.textContent = "Libreria React"; // para agregar un valor a un elemento con texcont
	listaDesordenada.appendChild(listaElemento1); // AGREGAMOS EL ELEMENTO A LA LISTA
	
	let listaElemento2 = document.createElement("li");
	listaElemento2.textContent = "Framework Angular";
	listaDesordenada.appendChild(listaElemento2); */


/*     let parrafo = document.getElementById("parrafo-a-eliminar");
	parrafo.parentNode.removeChild(parrafo); */
/* Para asignar valores */
    /* document.getElementById("nombre").value = "Harry";
	document.getElementById("edad").value  = 13; */


/* 4 - OBTENER DATOS DE FORMULARIO */
	// Asignar valores a los inputs
/* 	
	document.getElementById("nombre").value = "Harry";
	document.getElementById("edad").value  = 13;
	 */
		
	// Capturar valores de los inputs
/* 	const getValueInput = () => {
	    let inputValue1 = document.querySelector("#name").value;
	    let inputValue2 = document.querySelector("#surname").value;      
	
	    console.log(inputValue1);
	    console.log(inputValue2);
	};
 */
	/* Async - Await */
	
	async function getIp() {
		try {
		  let response = await fetch("https://api.ipify.org/?format=json");
		  let ipResponse = await response.json();
		  console.log(ipResponse);
	  
		  let responseLocation = await fetch("http://ip-api.com/json/" + ipResponse.ip);
		  let locationResponse = await responseLocation.json();
		  console.log(locationResponse);
		} catch {
		  console.log("Algo paso, no se pudo resolver...");
		}
	  }
	  getIp();