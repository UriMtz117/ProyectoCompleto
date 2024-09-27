"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('./conexion'),
    usuarios = _require.usuarios; // La colección "productos" también se usa para productos
// Usamos la colección principal "productos"


var db = usuarios; // Mostrar todos los productos

function mostrarProductos() {
  var productosSnapshot, productosList;
  return regeneratorRuntime.async(function mostrarProductos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(db.where('tipo', '==', 'producto').get());

        case 2:
          productosSnapshot = _context.sent;
          // Filtramos por productos
          productosList = [];
          productosSnapshot.forEach(function (doc) {
            productosList.push(_objectSpread({
              id: doc.id
            }, doc.data()));
          });
          return _context.abrupt("return", productosList);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
} // Buscar producto por ID


function buscarProductoPorId(id) {
  var productoDoc;
  return regeneratorRuntime.async(function buscarProductoPorId$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(db.doc(id).get());

        case 2:
          productoDoc = _context2.sent;

          if (!(!productoDoc.exists || productoDoc.data().tipo !== 'producto')) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt("return", null);

        case 5:
          return _context2.abrupt("return", _objectSpread({
            id: productoDoc.id
          }, productoDoc.data()));

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
} // Agregar un nuevo producto con nombre, precio y cantidad


function nuevoProducto(producto) {
  var nuevoDoc;
  return regeneratorRuntime.async(function nuevoProducto$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          producto.tipo = 'producto'; // Definimos que este documento es un producto

          _context3.next = 3;
          return regeneratorRuntime.awrap(db.add(producto));

        case 3:
          nuevoDoc = _context3.sent;
          return _context3.abrupt("return", _objectSpread({
            id: nuevoDoc.id
          }, producto));

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
} // Borrar un producto por ID


function borrarProducto(id) {
  var productoDoc;
  return regeneratorRuntime.async(function borrarProducto$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(db.doc(id).get());

        case 2:
          productoDoc = _context4.sent;

          if (!(!productoDoc.exists || productoDoc.data().tipo !== 'producto')) {
            _context4.next = 5;
            break;
          }

          return _context4.abrupt("return", {
            mensaje: 'Producto no encontrado'
          });

        case 5:
          _context4.next = 7;
          return regeneratorRuntime.awrap(db.doc(id)["delete"]());

        case 7:
          return _context4.abrupt("return", {
            mensaje: 'Producto borrado correctamente'
          });

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
}

module.exports = {
  mostrarProductos: mostrarProductos,
  buscarProductoPorId: buscarProductoPorId,
  nuevoProducto: nuevoProducto,
  borrarProducto: borrarProducto
};
//# sourceMappingURL=productosBD.dev.js.map
