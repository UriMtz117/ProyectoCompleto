const express = require('express');
const { nuevoProducto } = require('../bd/productosBD');  // Asegúrate de que la ruta sea correcta

const router = express.Router();

// Ruta para agregar un nuevo producto
router.post('/nuevoProducto', async (req, res) => {
    try {
        const { producto, usuario } = req.body;
        const nuevoProductoData = await nuevoProducto(producto, usuario);
        res.json(nuevoProductoData);
    } catch (error) {
        console.error("Error al agregar producto: ", error);
        res.status(500).json({ mensaje: 'Error al agregar producto' });
    }
});

module.exports = router;