"use strict";

var admin = require("firebase-admin");

var keys = require("../keys.json");

admin.initializeApp({
  credential: admin.credential.cert(keys)
});
var bd = admin.firestore();
var usuarios = bd.collection("miejemploBD"); // Asegúrate de que la colección sea la correcta

module.exports = {
  usuarios: usuarios // Exportamos la colección que usaremos tanto para usuarios como productos

};
//# sourceMappingURL=conexion.dev.js.map
