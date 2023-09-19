const express = require('express');
const router = express.Router();

const {
  crearPost,
  obtenerTodosLosPosts,
  obtenerPostPorId,
  actualizarPost,
  eliminarPost,
  editarPost, 
  mostrarFormulario, // Agrega un controlador para mostrar el formulario
} = require('../controladores/posts'); 

router.post('/crear-post', crearPost);
router.get('/posts', obtenerTodosLosPosts);
router.get('/posts/:id', obtenerPostPorId);
router.put('/posts/:id', actualizarPost);
router.delete('/posts/:id', eliminarPost);

router.get('/posts/:id/editar', editarPost);


router.get('/formulario', mostrarFormulario);
router.get('/posts', mostrarPosts);

module.exports = router;
