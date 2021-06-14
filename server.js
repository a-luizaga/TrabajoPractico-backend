const express = require('express'); // incluimos el modulo express (modulos son bibliotecas) 
const router = express.Router(); // Router, importante para poder diferenciar las peticiones al maximo

const { body, validationResult } = require('express-validator'); // Se incluye modulo validator

var app = express(); // Iniciamos express

app.use(express.json()); // Recibir peticiones en formato Json
app.use(express.urlencoded({extended: false}));

app.use(router); // Agregamos router a nuestra aplicacion de express para separa los verbos

router.post('/', 
    // Validacion de Json
    body("nombre").not().isEmpty(),
    body("nombre").isString(),
    body("apellido").not().isEmpty(),
    body("apellido").isString(),
    body("dni").isNumeric().isLength({max: 10}),
    /* falta validar cantidad de parametos */
    
    function(req, res){
        // Si hay un error en algunas de las validaciones se devuelve un objetoError y el codigo de
        // estado 400
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
    
    // La validacion es correcta se devuelve cod. estado 201
    console.log(req.body.nombre);
    console.log(req.body.apellido);   
    
    res.status(201).send("Todo ok");
    
});

router.get('/', function(req, res){

    const{nombre, apellido, dni} = req.body;
    
    console.log(nombre);
    console.log(apellido);  
    
    res.status(200).send("Ingresaste correctamente");
    
});


app.listen(3000);

console.log("La aplicacion esta escuchando en http://localhost:3000");

function validar(datos){
    const{nombre, apellido, dni} = datos;
    
}