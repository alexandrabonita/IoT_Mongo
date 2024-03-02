const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000,() => {
    console.log("Conectando a puerto 3000")
});

//contenedor Gratuito para subir proyectos

