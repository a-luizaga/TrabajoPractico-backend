const express = require('express'); // incluimos el modulo express (modulos son bibliotecas) 
const router = express.Router(); // Router, importante para poder diferenciar las peticiones al maximo
const rp = require('request-promise'); //Se agrega el modulo de request-promise para realizar el POST

// Se incluye modulo validator para realizar las validaciones del JSON
const { body, validationResult } = require('express-validator'); 

var app = express(); // Iniciamos express

app.use(express.json()); // Recibir peticiones en formato Json
app.use(express.urlencoded({extended: false}));

app.use(router); // Agregamos router a nuestra aplicacion de express para separa los verbos

router.post('/', 
    // Validacion del Json (no envio ningun mje acerca del error, solo devuelvo codigo de respuesta 400)     
    body("nombre").not().isEmpty(),
    body("nombre").isString(),
    body("apellido").not().isEmpty(),
    body("apellido").isString(),
    body("dni").isNumeric(),
    body("dni").isLength({max: 10}),   
    
    function(req, res){
        
        // Si hay un error en algunas de las validaciones o la cantidad de atributos del JSON es
        // mayor a 3 se devuelve codigo de respuesta 400
        const errors = validationResult(req);

        if(!errors.isEmpty() || !validarKeysDeJson(Object.keys(req.body))){            
            return res.status(400).send();
        }

    // Con los datos del Json ya validados se insertan en la BD realizando un POST a la URL dada:
    // EL objeto "options" se utiliza para setear las opciones de la peticion POST
    // En el body se completa con los datos validados de la peticion anterior
    var options = {
        uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
        method: 'POST',
        body:{
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            dni: req.body.dni
        },
        json: true 
    };

    // Se realiza el POST pasando como parametro el objeto "options"
    rp(options)
        .then(function (response) {
            // Como los datos fueron validados correctamente devuelvo como respuesta del POST 
            // el codigo 201, indicando que todo esta OK
            console.log(response);
            res.status(201).send("Todo ok");
        })
        .catch(function (err) {
            // Si hay algun error al realizar POST devuelvo codigo 500, error en el servidor 
            console.log(err);
            res.status(500).send("Error en el servidor");
         });   
    
});

// Se incluye el modulo path para poder usar el directorio raiz del proyecto
const path = require('path'); 

router.get('/', function(req, res){    
    // Se entrega como respuesta al GET un HTML    
    // __dirname es una constante que contiene la ruta raiz del proyecto
    res.status(200).sendFile(path.join(__dirname+"/crearPersonas.html"));    
});


app.listen(3000);

console.log("La aplicacion esta escuchando en http://localhost:3000");


// Funciona para validar la cantidad de atributos del Json y el formato de las keys
function validarKeysDeJson(array){   

    if(array.length != 3)
        return false;

    if(array[0]!="nombre" || array[1]!="apellido" || array[2]!="dni"){
        return false;
    }
    return true;
}