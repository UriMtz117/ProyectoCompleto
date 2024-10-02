"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../bd/conexion'),
    ventas = _require2.ventas; // Asegúrate de que está bien la conexión


var ruta = Router(); // Ruta para mostrar todas las ventas

ruta.get('/mostrarVentas', function _callee(req, res) {
  var snapshot, listaVentas;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(ventas.get());

        case 3:
          snapshot = _context.sent;

          if (!snapshot.empty) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.status(404).json({
            error: 'No se encontraron ventas'
          }));

        case 6:
          listaVentas = [];
          snapshot.forEach(function (doc) {
            listaVentas.push(_objectSpread({
              id: doc.id
            }, doc.data()));
          });
          res.json(listaVentas);
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            error: 'Error al obtener ventas'
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
}); // Ruta para buscar venta por ID

ruta.get('/:id', function _callee2(req, res) {
  var id, doc;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(ventas.doc(id).get());

        case 4:
          doc = _context2.sent;

          if (doc.exists) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            error: 'Venta no encontrada'
          }));

        case 7:
          res.json(_objectSpread({
            id: doc.id
          }, doc.data()));
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            error: 'Error al obtener la venta'
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 10]]);
}); // Ruta para agregar una nueva venta

ruta.post('/agregarVenta', function _callee3(req, res) {
  var _req$body, IdUsuario, IdProducto, Cantidad, FechaYHora, nuevaVenta, docRef;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, IdUsuario = _req$body.IdUsuario, IdProducto = _req$body.IdProducto, Cantidad = _req$body.Cantidad, FechaYHora = _req$body.FechaYHora;
          _context3.prev = 1;

          if (!(!IdUsuario || !IdProducto || !Cantidad || !FechaYHora)) {
            _context3.next = 4;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            error: 'Faltan campos obligatorios'
          }));

        case 4:
          nuevaVenta = {
            IdUsuario: IdUsuario,
            IdProducto: IdProducto,
            Cantidad: Cantidad,
            FechaYHora: FechaYHora,
            Status: 'vendido' // El estado inicial es "vendido"

          };
          _context3.next = 7;
          return regeneratorRuntime.awrap(ventas.add(nuevaVenta));

        case 7:
          docRef = _context3.sent;
          res.json({
            mensaje: 'Venta agregada',
            id: docRef.id
          });
          _context3.next = 14;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](1);
          res.status(500).json({
            error: 'Error al agregar la venta'
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 11]]);
}); // Ruta para cancelar (actualizar) una venta por ID

ruta.put('/cancelarVenta/:id', function _callee4(req, res) {
  var id, doc;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(ventas.doc(id).get());

        case 4:
          doc = _context4.sent;

          if (doc.exists) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            error: 'Venta no encontrada para cancelar'
          }));

        case 7:
          _context4.next = 9;
          return regeneratorRuntime.awrap(ventas.doc(id).update({
            Status: 'cancelado'
          }));

        case 9:
          // Cambia el estatus a "cancelado"
          res.json({
            mensaje: 'Venta cancelada con éxito'
          });
          _context4.next = 15;
          break;

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](1);
          res.status(500).json({
            error: 'Error al cancelar la venta'
          });

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 12]]);
});
module.exports = ruta;
//# sourceMappingURL=rutasVentas.dev.js.map
