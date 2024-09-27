"use strict";

var crypto = require("crypto");

function encriptarPassword(password) {
  var salt = crypto.randomBytes(32).toString("hex"); //console.log(salt);

  var hash = crypto.scryptSync(password, salt, 100000, 64, "sha512").toString("hex"); //console.log(hash);

  return {
    salt: salt,
    hash: hash
  };
}

function validarPasword(password, hash, salt) {
  var hashEvaluar = crypto.scryptSync(password, salt, 100000, 64, "sha512").toString("hex");
  return hashEvaluar == hash;
}

function usuarioAutorizado() {}

function adminAutorizado() {}

module.exports = {
  encriptarPassword: encriptarPassword,
  validarPasword: validarPasword,
  usuarioAutorizado: usuarioAutorizado,
  adminAutorizado: adminAutorizado
};
//# sourceMappingURL=FuncionesPasword.dev.js.map
