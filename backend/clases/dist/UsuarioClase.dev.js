"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Usuario =
/*#__PURE__*/
function () {
  function Usuario(data) {
    _classCallCheck(this, Usuario);

    this.id = data.id;
    this.nombre = data.nombre;
    this.usuario = data.usuario;
    this.password = data.password;
    this.salt = data.salt;
    this.tipoUsuario = data.tipoUsuario;
  }

  _createClass(Usuario, [{
    key: "id",
    set: function set(id) {
      this._id = id;
    },
    get: function get() {
      return this._id;
    }
  }, {
    key: "nombre",
    set: function set(nombre) {
      var nombreRegex = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;

      if (nombreRegex.test(nombre)) {
        this._nombre = nombre;
      }
    },
    get: function get() {
      return this._nombre.toUpperCase();
    }
  }, {
    key: "usuario",
    set: function set() {
      var usuario = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      if (usuario.length > 0 && usuario.length <= 15) {
        this._usuario = usuario;
      }
    },
    get: function get() {
      return this._usuario;
    }
  }, {
    key: "password",
    set: function set(password) {
      //const passwordRegex = /^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[\W_]).{4,}$/;
      //if(passwordRegex.test(password)){
      this._password = password; //}
    },
    get: function get() {
      return this._password;
    }
  }, {
    key: "salt",
    set: function set(salt) {
      this._salt = salt;
    },
    get: function get() {
      return this.salt;
    }
  }, {
    key: "tipoUsuario",
    set: function set(tipoUsuario) {
      this._tipoUsuario = tipoUsuario;
    },
    get: function get() {
      return this._tipoUsuario;
    }
  }, {
    key: "getusuario",
    get: function get() {
      var conid = {
        id: this._id,
        nombre: this._nombre,
        usuario: this._usuario,
        password: this._password,
        salt: this._salt,
        tipoUsuario: this._tipoUsuario
      };
      var sinid = {
        nombre: this._nombre,
        usuario: this._usuario,
        password: this._password,
        salt: this._salt,
        tipoUsuario: this._tipoUsuario
      };

      if (this.id != undefined) {
        return conid;
      } else {
        return sinid;
      }
    }
  }]);

  return Usuario;
}();

module.exports = Usuario;
/*var data={
    nombre:"Ludwing Van Bethoveen",
    usuario: "Bethoveen",
    password: "Abc1:"
}
var usuario1=new Usuario(data)
console.log(usuario1.getusuario)*/
//# sourceMappingURL=UsuarioClase.dev.js.map
