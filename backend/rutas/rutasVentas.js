const { Router } = require('express');
const { ventas } = require('../bd/conexion'); // Asegúrate de que está bien la conexión
const ruta = Router();

// Ruta para mostrar todas las ventas
ruta.get('/mostrarVentas', async (req, res) => {
    try {
        const snapshot = await ventas.get();
        if (snapshot.empty) {
            return res.status(404).json({ error: 'No se encontraron ventas' });
        }
        const listaVentas = [];
        snapshot.forEach(doc => {
            listaVentas.push({ id: doc.id, ...doc.data() });
        });
        res.json(listaVentas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener ventas' });
    }
});

// Ruta para buscar venta por ID
ruta.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await ventas.doc(id).get();
        if (!doc.exists) {
            return res.status(404).json({ error: 'Venta no encontrada' });
        }
        res.json({ id: doc.id, ...doc.data() });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la venta' });
    }
});

// Ruta para agregar una nueva venta
ruta.post('/agregarVenta', async (req, res) => {
    const { IdUsuario, IdProducto, Cantidad, FechaYHora } = req.body;
    try {
        if (!IdUsuario || !IdProducto || !Cantidad || !FechaYHora) {
            return res.status(400).json({ error: 'Faltan campos obligatorios' });
        }
        const nuevaVenta = {
            IdUsuario,
            IdProducto,
            Cantidad,
            FechaYHora,
            Status: 'vendido',  // El estado inicial es "vendido"
        };
        const docRef = await ventas.add(nuevaVenta);
        res.json({ mensaje: 'Venta agregada', id: docRef.id });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar la venta' });
    }
});

// Ruta para cancelar (actualizar) una venta por ID
ruta.put('/cancelarVenta/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await ventas.doc(id).get();
        if (!doc.exists) {
            return res.status(404).json({ error: 'Venta no encontrada para cancelar' });
        }
        await ventas.doc(id).update({ Status: 'cancelado' });  // Cambia el estatus a "cancelado"
        res.json({ mensaje: 'Venta cancelada con éxito' });
    } catch (error) {
        res.status(500).json({ error: 'Error al cancelar la venta' });
    }
});

module.exports = ruta;