const express = require('express'); // incluimos el modulo express (modulos son bibliotecas) 
const router = express.Router(); // Router, importante para poder diferenciar las peticiones al maximo

var app = express(); // Iniciamos express

app.use(express.json()); // Recibir peticiones en formato Json
app.use(express.urlencoded({extended: false}));

app.use(router); // Agregamos router a nuestra aplicacion de express para separa los verbos

router.post('/', function(req, res){

   // console.log(req.body);

    const{nombre, apellido, dni} = req.body;
    
    console.log(nombre);
    console.log(apellido);   
    
    res.status(202).send("Todo ok");
    
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