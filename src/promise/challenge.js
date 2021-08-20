const fetchData = require('../utils/fetchData');
const API = "https://rickandmortyapi.com/api/character/"

//1.-cuantos personajes
//2.-personajes
//3.-dimension

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`)
    })

    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url)
    })

    .then(data => {
        console.log(data.dimension)
    })

    .catch(err => console.error(err));