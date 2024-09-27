"use strict";

var express = require('express');

var cors = require('cors');

var rutasUsuarios = require('./rutas/rutasUsuarios'); // Importa las rutas de usuarios


require("dotenv").config();

var app = express();
app.use(cors());
app.use(express.json()); // Habilitamos la recepción de JSON
// Usar las rutas para usuarios

app.use('/usuarios', rutasUsuarios); // Asegúrate de que esta línea esté incluida

var port = process.env.PORT || 3000;
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Servidor en funcionamiento en puerto ".concat(PORT));
});
//# sourceMappingURL=index.dev.js.map
