//Funcion que da vida a las llamadas de mi API
//Instancia al llamado de una API en JavaScript
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//Funcion FetchData para traer la informacion de nuestra API
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        //PETICION Abrir una URL o hacer un llamado a una URL
        xhttp.open('GET', url_api, true);
        //Si este cambio sucede , ejecutara una funcion, escuchar elemento
        xhttp.onreadystatechange = (() => {
            //si el estado en el cual se encuentra es satisfactorio
            if (xhttp.readyState === 4) {

                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error' + url_api))

            }
        });
        //Se envia la solicitud
        xhttp.send();
    });
}

module.exports = fetchData;