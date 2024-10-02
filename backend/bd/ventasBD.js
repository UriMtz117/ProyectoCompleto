const admin = require('firebase-admin');
const keys = require('../keys.json');

// Inicializamos Firebase
admin.initializeApp({
    credential: admin.credential.cert(keys)
});

const db = admin.firestore();  // Conexión a Firestore

// Referencia a la colección de Ventas
const ventas = db.collection('Ventas');

module.exports = {
    ventas  // Exportamos la colección de ventas para usarla en las rutas
};