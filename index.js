const express = require('express');
const cors = require('cors');
const rutasUsuarios = require('./rutas/rutasUsuarios');
const rutasProductos = require('./rutas/rutasProductos');
const rutasVentas = require('./rutas/rutasVentas');
require('dotenv').config();
const admin = require('firebase-admin');
const serviceAccount = require('./keys.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://miejemplo-3b20f.firebaseio.com"
  });
}

const db = admin.firestore();

const app = express();
app.use(cors());
app.use(express.json());

// Middleware para pasar Firestore a las rutas
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Usar las rutas para usuarios, productos y ventas
app.use('/usuarios', rutasUsuarios);
app.use('/productos', rutasProductos);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en puerto ${PORT}`);
});
