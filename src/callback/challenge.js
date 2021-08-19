//Funcion que da vida a las llamadas de mi API
//Instancia al llamado de una API en JavaScript
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

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