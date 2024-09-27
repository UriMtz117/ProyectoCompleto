const admin = require("firebase-admin");
const keys = require("../keys.json");

admin.initializeApp({
    credential: admin.credential.cert(keys)
});

const bd = admin.firestore();
const usuarios = bd.collection("miejemploBD");  // Asegúrate de que la colección sea la correcta

module.exports = {
    usuarios  // Exportamos la colección que usaremos tanto para usuarios como productos
};