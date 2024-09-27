"use strict";

var express = require('express');

var _require = require('../bd/usuariosBD'),
    borrarUsuario = _require.borrarUsuario; // Asegúrate de que la ruta sea correcta


var router = express.Router(); // Ruta para borrar un usuario por ID

router["delete"]('/borrarUsuario/:id', function _callee(req, res) {
  var id, resultado;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          id = req.params.id;
          _context.next = 4;
          return regeneratorRuntime.awrap(borrarUsuario(id));

        case 4:
          resultado = _context.sent;
          res.json(resultado);
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error("Error al borrar usuario: ", _context.t0);
          res.status(500).json({
            mensaje: 'Error al borrar usuario'
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
module.exports = router;
//# sourceMappingURL=rutasUsuario.dev.js.map
