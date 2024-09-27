"use strict";

var express = require('express');

var _require = require('../bd/productosBD'),
    nuevoProducto = _require.nuevoProducto; // Asegúrate de que la ruta sea correcta


var router = express.Router(); // Ruta para agregar un nuevo producto

router.post('/nuevoProducto', function _callee(req, res) {
  var _req$body, producto, usuario, nuevoProductoData;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, producto = _req$body.producto, usuario = _req$body.usuario;
          _context.next = 4;
          return regeneratorRuntime.awrap(nuevoProducto(producto, usuario));

        case 4:
          nuevoProductoData = _context.sent;
          res.json(nuevoProductoData);
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error("Error al agregar producto: ", _context.t0);
          res.status(500).json({
            mensaje: 'Error al agregar producto'
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
module.exports = router;
//# sourceMappingURL=rutasProductos.dev.js.map
