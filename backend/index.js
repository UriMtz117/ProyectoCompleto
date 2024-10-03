const express = require('express');
const app = express();

app.use(express.json());  // Para procesar JSON en las solicitudes

// Importar las rutas
const rutasVentas = require('./rutas/rutasVentas');

// Usar las rutas
app.use('/api/ventas', rutasVentas);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
