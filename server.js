const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000,() => {
    console.log("Conectando a puerto 3000");
});

//contenedor Gratuito para subir proyectos
// agregar una pagina index .html
