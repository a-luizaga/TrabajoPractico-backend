const express = require('express'); // incluimos el modulo express (modulos son bibliotecas) 
const router = express.Router(); // Router, importante para poder diferenciar las peticiones al maximo
const rp = require('request-promise'); //Se agrega el modulo de request-promise para realizar el POST

const { body, validationResult } = require('express-validator'); // Se incluye modulo validator

var app = express(); // Iniciamos express

app.use(express.json()); // Recibir peticiones en formato Json
app.use(express.urlencoded({extended: false}));

app.use(router); // Agregamos router a nuestra aplicacion de express para separa los verbos

router.post('/', 
    // Validacion del Json    
    body("nombre").not().isEmpty().withMessage("El campo nombre esta vacio"),
    body("nombre").isString(),
    body("apellido").not().isEmpty().withMessage("El campo apellido esta vacio"),
    body("apellido").isString(),
    body("dni").isNumeric().withMessage("El DNI debe ser numerico"),
    body("dni").isLength({max: 10}).withMessage("El DNI debe tener 10 caracteres como maximo"),
    
    /* FALTA VALIDAR LA CANTIDAD DE PARAMETROS */
    
    function(req, res){
        // Si hay un error en algunas de las validaciones se devuelve un objetoError y el codigo de
        // estado 400
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

    // Con los datos del Json validados se insertan en la BD realizando un POST a la URL dada:
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

router.get('/', function(req, res){

    res.render("index");  
    
    res.status(200);
    
});


app.listen(3000);

console.log("La aplicacion esta escuchando en http://localhost:3000");

function validar(datos){
    const{nombre, apellido, dni} = datos;
    
}