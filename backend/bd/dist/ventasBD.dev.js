"use strict";

var admin = require('firebase-admin');

var keys = require('../keys.json'); // Inicializamos Firebase


admin.initializeApp({
  credential: admin.credential.cert(keys)
});
var db = admin.firestore(); // Conexión a Firestore
// Referencia a la colección de Ventas

var ventas = db.collection('Ventas');
module.exports = {
  ventas: ventas // Exportamos la colección de ventas para usarla en las rutas

};
//# sourceMappingURL=ventasBD.dev.js.map
