
const rp = require('request-promise'); //Se agrega el modulo de request-promise

// objeto "options" para setear las opciones de la peticion
var options = {
    uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
    method: 'GET',
    json: true 
};

// Se realiza la peticion pasando como parametro el objeto "options"
rp(options)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.log(err);
    });
