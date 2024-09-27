const { usuarios } = require('./conexion');  // La colección "productos" también se usa para productos

// Usamos la colección principal "productos"
const db = usuarios;

// Mostrar todos los productos
async function mostrarProductos() {
    const productosSnapshot = await db.where('tipo', '==', 'producto').get();  // Filtramos por productos
    const productosList = [];
    productosSnapshot.forEach(doc => {
        productosList.push({ id: doc.id, ...doc.data() });
    });
    return productosList;
}

// Buscar producto por ID
async function buscarProductoPorId(id) {
    const productoDoc = await db.doc(id).get();
    if (!productoDoc.exists || productoDoc.data().tipo !== 'producto') {
        return null;
    }
    return { id: productoDoc.id, ...productoDoc.data() };
}

// Agregar un nuevo producto con nombre, precio y cantidad
async function nuevoProducto(producto) {
    producto.tipo = 'producto';  // Definimos que este documento es un producto
    const nuevoDoc = await db.add(producto);
    return { id: nuevoDoc.id, ...producto };
}

// Borrar un producto por ID
async function borrarProducto(id) {
    const productoDoc = await db.doc(id).get();
    if (!productoDoc.exists || productoDoc.data().tipo !== 'producto') {
        return { mensaje: 'Producto no encontrado' };
    }
    await db.doc(id).delete();
    return { mensaje: 'Producto borrado correctamente' };
}

module.exports = { mostrarProductos, buscarProductoPorId, nuevoProducto, borrarProducto };