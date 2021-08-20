//Funcion que da vida a las llamadas de mi API
//Instancia al llamado de una API en JavaScript
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";
//Funcion FetchData para traer la informacion de nuestra API
function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    //PETICION Abrir una URL o hacer un llamado a una URL
    xhttp.open('GET', url_api, true);
    //Si este cambio sucede , ejecutara una funcion, escuchar elemento
    xhttp.onreadystatechange = function (event) {
        //si el estado en el cual se encuentra es satisfactorio
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                //Referencia a todo el contexto del json
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error' + url_api);
                return callback(error, null)
            }
        }
    }
    //Se envia la solicitud
    xhttp.send();
}

//Estados del http
//0 - inicializado
//1 - se esta cargado
//2 - ya se ha cargado
//3 - descarga de algo
// -  completado

//EJERCICIO
//1.-Hacer peticion a nuestra API
//2.-Obtener cuantos elementos tiene
//3.-Acceder al primer personaje
//4.-Obtener la ubicacion en la que se encuentra
//5.-Saber en que dimension se encuentra

fetchData(API, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3) {
            if (error3) return console.log(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})

