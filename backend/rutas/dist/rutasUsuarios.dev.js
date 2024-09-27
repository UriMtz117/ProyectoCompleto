"use strict";

var express = require('express');

var _require = require('../bd/usuariosBD'),
    mostrarUsuarios = _require.mostrarUsuarios,
    buscarUsuarioPorId = _require.buscarUsuarioPorId,
    nuevoUsuario = _require.nuevoUsuario,
    borrarUsuario = _require.borrarUsuario; // Asegúrate de que las rutas sean correctas


var router = express.Router(); // Ruta para mostrar todos los usuarios

router.get('/mostrarUsuarios', function _callee(req, res) {
  var usuarios;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mostrarUsuarios());

        case 3:
          usuarios = _context.sent;
          res.json(usuarios);
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error("Error al mostrar usuarios: ", _context.t0);
          res.status(500).json({
            mensaje: 'Error al mostrar usuarios'
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // Ruta para buscar un usuario por ID

router.get('/buscarPorId/:id', function _callee2(req, res) {
  var id, usuario;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _context2.next = 4;
          return regeneratorRuntime.awrap(buscarUsuarioPorId(id));

        case 4:
          usuario = _context2.sent;

          if (usuario) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            mensaje: 'Usuario no encontrado'
          }));

        case 7:
          res.json(usuario);
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error("Error al buscar usuario: ", _context2.t0);
          res.status(500).json({
            mensaje: 'Error al buscar usuario'
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
}); // Ruta para agregar un nuevo usuario

router.post('/nuevoUsuario', function _callee3(req, res) {
  var usuario, nuevoUsuarioData;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          usuario = req.body;
          _context3.next = 4;
          return regeneratorRuntime.awrap(nuevoUsuario(usuario));

        case 4:
          nuevoUsuarioData = _context3.sent;
          res.json(nuevoUsuarioData);
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error("Error al agregar usuario: ", _context3.t0);
          res.status(500).json({
            mensaje: 'Error al agregar usuario'
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // Ruta para borrar un usuario por ID

router["delete"]('/borrarUsuario/:id', function _callee4(req, res) {
  var id, resultado;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(borrarUsuario(id));

        case 4:
          resultado = _context4.sent;
          res.json(resultado);
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          console.error("Error al borrar usuario: ", _context4.t0);
          res.status(500).json({
            mensaje: 'Error al borrar usuario'
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
module.exports = router;
//# sourceMappingURL=rutasUsuarios.dev.js.map
