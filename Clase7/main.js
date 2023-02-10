/* fetch("https://swapi.dev/api/planets/1/")
    .then (res => res.json())  /* res es donde se guarda el objeto JSON */
    /* .then (json => console.log(json) )  /* recibe como parametro el redultado de la ejecucion anterior es como un retorne */
    /* .catch ( (err) => console.error(err)); */


    /*  en ves de lamar asi a la API */
    /*  llamar asi */

    fetch("https://swapi.dev/api/planets/1/")
    .then ((res)=> res.json()) 
    .then ((json) => {
        let planet =json;
        let residents = planet.residents;

        fetch (residents[0])
            .then((res1) =>res1.json())
            .then((json1) => console.log(json1))
     })
    .catch((err) => console.error(err));

