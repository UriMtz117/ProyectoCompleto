"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('./conexion'),
    usuarios = _require.usuarios; // Asegúrate de que las conexiones están bien definidas
// Mostrar todos los usuarios (filtrando por aquellos que tienen el tipo "usuario")


function mostrarUsuarios() {
  var usuariosSnapshot, usuariosList;
  return regeneratorRuntime.async(function mostrarUsuarios$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(usuarios.get());

        case 2:
          usuariosSnapshot = _context.sent;
          // Elimina el filtro para obtener todos los documentos
          usuariosList = [];
          usuariosSnapshot.forEach(function (doc) {
            usuariosList.push(_objectSpread({
              id: doc.id
            }, doc.data()));
          });
          return _context.abrupt("return", usuariosList);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
} // Buscar un usuario por ID


function buscarUsuarioPorId(id) {
  var usuarioDoc;
  return regeneratorRuntime.async(function buscarUsuarioPorId$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(usuarios.doc(id).get());

        case 2:
          usuarioDoc = _context2.sent;

          if (usuarioDoc.exists) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt("return", null);

        case 5:
          return _context2.abrupt("return", _objectSpread({
            id: usuarioDoc.id
          }, usuarioDoc.data()));

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
} // Agregar un nuevo usuario como un nuevo documento en la colección "usuarios"


function nuevoUsuario(usuario) {
  var nuevoDoc;
  return regeneratorRuntime.async(function nuevoUsuario$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          usuario.tipo = 'usuario'; // Agregamos el campo para distinguir usuarios de productos

          _context3.next = 3;
          return regeneratorRuntime.awrap(usuarios.add(usuario));

        case 3:
          nuevoDoc = _context3.sent;
          return _context3.abrupt("return", _objectSpread({
            id: nuevoDoc.id
          }, usuario));

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
} // Borrar un usuario por ID (solo si es un "usuario")


function borrarUsuario(id) {
  var usuarioDoc;
  return regeneratorRuntime.async(function borrarUsuario$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(usuarios.doc(id).get());

        case 2:
          usuarioDoc = _context4.sent;

          if (usuarioDoc.exists) {
            _context4.next = 5;
            break;
          }

          return _context4.abrupt("return", {
            mensaje: 'Usuario no encontrado'
          });

        case 5:
          _context4.next = 7;
          return regeneratorRuntime.awrap(usuarios.doc(id)["delete"]());

        case 7:
          return _context4.abrupt("return", {
            mensaje: 'Usuario borrado correctamente'
          });

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
}

module.exports = {
  mostrarUsuarios: mostrarUsuarios,
  buscarUsuarioPorId: buscarUsuarioPorId,
  nuevoUsuario: nuevoUsuario,
  borrarUsuario: borrarUsuario
};
//# sourceMappingURL=usuariosBD.dev.js.map
