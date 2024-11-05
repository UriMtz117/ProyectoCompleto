const express = require('express');
const router = express.Router();

// Ruta para obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const productosSnapshot = await req.db.collection('productos').get();
    const productos = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

// Ruta para obtener un producto por ID
router.get('/:id', async (req, res) => {
  try {
    const productoId = req.params.id;
    console.log('ID recibido para obtener producto:', productoId);  // Depuración

    const doc = await req.db.collection('productos').doc(productoId).get();
    if (doc.exists) {
      res.status(200).json({ id: doc.id, ...doc.data() });
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener producto por ID:', error);
    res.status(500).json({ error: 'Error al obtener producto por ID' });
  }
});

// Ruta para agregar un nuevo producto
router.post('/', async (req, res) => {
  try {
    const nuevoProducto = req.body;

    // Asegúrate de que se esté accediendo a la colección correcta
    const docRef = await req.db.collection('productos').add(nuevoProducto);
    res.status(201).json({ id: docRef.id, ...nuevoProducto });
  } catch (error) {
    console.error('Error al agregar producto:', error);
    res.status(500).json({ error: 'Error al agregar producto' });
  }
});


// Ruta para actualizar un producto por ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const productoActualizado = req.body;

    // Verifica que el objeto de actualización no esté vacío
    if (Object.keys(productoActualizado).length === 0) {
      return res.status(400).json({ error: 'El objeto de actualización no puede estar vacío' });
    }

    // Actualiza el producto en la colección de Firebase
    await req.db.collection('productos').doc(id).update(productoActualizado);
    res.status(200).json({ message: 'Producto actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
});

// Ruta para eliminar un producto por ID
router.delete('/:id', async (req, res) => {
  try {
    const productoId = req.params.id;
    console.log('ID recibido para eliminar producto:', productoId);  // Depuración

    await req.db.collection('productos').doc(productoId).delete();
    res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
});

module.exports = router;
