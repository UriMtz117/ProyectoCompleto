const express = require('express');
const cors = require('cors');
const rutasUsuarios = require('./rutas/rutasUsuarios');  // Importa las rutas de usuarios
require ("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());  // Habilitamos la recepción de JSON

// Usar las rutas para usuarios
app.use('/usuarios', rutasUsuarios);  // Asegúrate de que esta línea esté incluida
var port=process.env.PORT || 3000;
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en puerto ${PORT}`);
});