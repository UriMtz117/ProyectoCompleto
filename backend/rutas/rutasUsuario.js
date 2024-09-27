const express = require('express');
const { borrarUsuario } = require('../bd/usuariosBD');  // Asegúrate de que la ruta sea correcta

const router = express.Router();

// Ruta para borrar un usuario por ID
router.delete('/borrarUsuario/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await borrarUsuario(id);
        res.json(resultado);
    } catch (error) {
        console.error("Error al borrar usuario: ", error);
        res.status(500).json({ mensaje: 'Error al borrar usuario' });
    }
});

module.exports = router;