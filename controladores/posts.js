const Post = require('../modelos/Post');

async function crearPost(req, res) {
  try {
    const nuevoPost = await Post.create(req.body);
    return res.status(201).json(nuevoPost);
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear el post' });
  }
}

async function obtenerTodosLosPosts(req, res) {
  try {
    const posts = await Post.findAll();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener los posts' });
  }
}

async function obtenerPostPorId(req, res) {
  const postId = req.params.id;
  try {
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post no encontrado' });
    }
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener el post' });
  }
}

function editarPost(req, res) {
  const postId = req.params.id;
  // Lógica para editar el post
}

function mostrarFormulario(req, res) {
  // Renderiza la vista form.ejs
  res.render('form'); 
}

function mostrarPosts(req, res) {
  // Renderiza la vista posts.ejs
  res.render('posts');
}

async function actualizarPost(req, res) {
  const postId = req.params.id;
  try {
    const [updatedRows] = await Post.update(req.body, {
      where: { id: postId },
    });

    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Post no encontrado' });
    }

    const updatedPost = await Post.findByPk(postId);

    return res.status(200).json(updatedPost);
  } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar el post' });
  }
}

async function eliminarPost(req, res) {
  const postId = req.params.id;
  try {
    const deletedRows = await Post.destroy({ where: { id: postId } });

    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Post no encontrado' });
    }

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar el post' });
  }
}

module.exports = {
  crearPost,
  obtenerTodosLosPosts,
  obtenerPostPorId,
  editarPost,
  mostrarFormulario,
  mostrarPosts,
  actualizarPost,
  eliminarPost,
};
