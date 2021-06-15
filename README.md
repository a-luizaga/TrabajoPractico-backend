# TrabajoPractico-backend

## Ejecucion del programa

1. Se debe abrir la terminal o simbolo de sistema ubicandose en el directorio raiz del proyecto.
2. Ejecutar el siguiente comando para instalar las dependencias del proyecto:
     "npm install"
3. Una vez que se instalaron las dependecias ejecutar el siguiente comando para correr el programa:
    "node server.js"

NOTA: el programa utiliza el puerto 3000 para escuchar las peticiones.

## Respuestas al ejercicio 2

1. Un servidor HTTP es un software que se ejecuta en el lado del servidor y tiene como función principal servir recursos o funcionalidades cuando se reciben peticiones del lado del cliente.

2. Los verbos HTTP son los métodos que indican la acción que se debe realizar al enviarse una petición al servidor. Por ejemplo si se desea obtener cierta información del servidor se utilizara el verbo GET.

	Los verbos más conocidos son:

	GET: este verbo permite obtener información del servidor, por ejemplo ver la información de un producto o obtener un listado de productos.

	POST: permite añadir información al servidor, por ejemplo cuando enviamos un formulario al servidor se realiza a través de este verbo.

	PUT: permite modificar información en el servidor.

	DELETE: permite eliminar información del servidor.


3. En una comunicación HTTP request es el mensaje que emite el cliente al servidor y el response es la respuesta que emite el servidor al cliente. 

	Los headers son las cabeceras de estos mensajes y contienen información adicional de la petición o respuesta. 

	Algunos de los componentes que se pueden encontrar en el header son:

	Accept: para definir el tipo de contenido que acepta el servidor, json, HTML, etc..

	Autenticación: para asegurarse si se puede o no pedir ciertos recursos al servidor.

	Content-type: para indicar el tipo de formato del body.

4. Una queryString es una manera de enviar información extra al servidor a través de la URL cuando se realiza una petición. De esta manera el servidor recibirá estos datos y en base a estos devolverá un recurso especifico como respuesta. 

     Estructura de una query:  se añade el símbolo “?” al final de la URL, y seguido se completa con clave=valor.  Si se quiere enviar más de un parámetro se utiliza el símbolo “&” para separarlos.

     Ejemplo: api.com/person?id=1&age=25

     También se las utiliza para compartir datos con el frontend, pero hay que tener cuidado porque estos datos son visibles por el cliente.

5.  El responseCode es un número que nos indica qué sucedió con la petición y está contenido en el response.
Valores posibles:

     2XX: indica que la petición ha sido exitosa.

     3XX: indica que la peticion ha sido redirigida.

     4XX: indica errores del lado de cliente. Un ejemplo es el 404 al no encontrarse tal recurso.

     5XX: indica errores del lado de servidor.

6.

7. El verbo http que utiliza el navegador cuando se accede a una página es el GET.
 
8. Las estructura JSON y XML son dos estándares para intercambiar información entre cliente y servidor.  XML se basa en el uso de etiquetas mientras que JSON utiliza pares clave/valor.

Ejemplo de una estructura XML:

```
<persona>
	<nombre>Alexander</nombre>
	<apellido>Luizaga</apellido>
	<ciudad>Buenos Aires</ciudad>	
</persona>
```

Ejemplo de una estructura JSON:
```
{
	“nombre”: “Alexander”,
	“apellido: “Luizaga”,
	“ciudad”: “Buenos Aires”
}
```

9. SOAP básicamente es un protocolo que permite la comunicación entre aplicaciones que se encuentran en distintos lenguajes y plataformas.  Esta comunicación se realiza por medio de mensajes en formato XML. 

10. REST Full es un conjunto de lineamientos y principios de arquitectura que nos permite diseñar y construir APIs para poder acceder a recursos y también establecer una comunicación entre distintos sistemas basado en el protocolo HTTP.  Se basa en el modelo Cliente-Servidor y por lo general utiliza la estructura JSON para el formato de los mensajes.
 
11. Los headers en un request es el encabezado de la petición la cual contiene información extra, es útil para que el servidor la analice y en base a esta devuelva una respuesta adaptada.
La key Content-type en un header se utiliza para indicar el formato del contenido del body, por ejemplo JSON o XML.


## Ejercicio 3

1. Se realiza un GET a la URL dada.  Se puede ver que el código de respuesta es 200, esto indica que la petición ha sido exitosa.  Y en la parte del “body” se puede ver datos de personas en formato JSON los cuales corresponden a la respuesta de la petición.

![Imagen1](/screenshots/img1.png)


2. Se realiza el POST a la URL dada.  En el “body” de la petición se completa con mis datos en formato JSON.    
Se puede ver que la petición ha sido exitosa (código de respuesta: 200) y que en el “body” de la respuesta nos muestra un objeto con un atributo “name” y su valor.

![Imagen2](/screenshots/img2.png)

3. Las diferencias que notó es que el tamaño de la respuesta aumentó, en el primer GET era de 42.92KB y en el segundo GET es de 43KB.  Esto fue porque se agregó información al realizarse el POST del punto anterior.  
Además se puede ver en la captura que mis datos han sido almacenados en el servidor ya que forman parte de la respuesta al realizarse el GET.

![Imagen3](/screenshots/img3.png)



