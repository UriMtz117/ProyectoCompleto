const express = require('express');
const { mostrarUsuarios, buscarUsuarioPorId, nuevoUsuario, borrarUsuario } = require('../bd/usuariosBD');  // Asegúrate de que las rutas sean correctas

const router = express.Router();

// Ruta para mostrar todos los usuarios
router.get('/mostrarUsuarios', async (req, res) => {
    try {
        const usuarios = await mostrarUsuarios();
        res.json(usuarios);
    } catch (error) {
        console.error("Error al mostrar usuarios: ", error);
        res.status(500).json({ mensaje: 'Error al mostrar usuarios' });
    }
});

// Ruta para buscar un usuario por ID
router.get('/buscarPorId/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const usuario = await buscarUsuarioPorId(id);
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        console.error("Error al buscar usuario: ", error);
        res.status(500).json({ mensaje: 'Error al buscar usuario' });
    }
});

// Ruta para agregar un nuevo usuario
router.post('/nuevoUsuario', async (req, res) => {
    try {
        const usuario = req.body;
        const nuevoUsuarioData = await nuevoUsuario(usuario);
        res.json(nuevoUsuarioData);
    } catch (error) {
        console.error("Error al agregar usuario: ", error);
        res.status(500).json({ mensaje: 'Error al agregar usuario' });
    }
});

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