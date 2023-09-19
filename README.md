# Proyecto-Web-Landing-page
EPICA-PROYECTO FINAL

# Plataforma de Recetas de Cocina

Bienvenido a la Plataforma de Recetas de Cocina, donde puedes explorar y compartir tus recetas favoritas. Este proyecto utiliza Node.js, Express.js y Sequelize como tecnologías principales.

## Requisitos previos

Asegúrate de tener instalados los siguientes elementos antes de ejecutar la aplicación:

- [Node.js](https://nodejs.org/): Instala Node.js en tu sistema.
- [MySQL](https://www.mysql.com/): Configura una base de datos MySQL o utiliza una base de datos existente.

## Configuración

### Variables de Entorno

1. Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables de entorno:

   ```env
   DB_NAME=nombre_de_tu_base_de_datos
   DB_USER=nombre_de_usuario_de_mysql
   DB_PASSWORD=contraseña_de_mysql
   DB_HOST=host_de_mysql
   PORT=puerto_de_tu_aplicación (por ejemplo, 3000)


Instalación de Dependencias:

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

npm install

Ejecutar la Aplicación

Ejecuta la aplicación con el siguiente comando:

npm start

La aplicación estará disponible en http://localhost:3000 (o el puerto que hayas configurado en tu archivo .env).

Funcionalidad
Rutas Principales
/: Página de inicio de la Plataforma de Recetas de Cocina.
/posts: Muestra una lista de todas las recetas disponibles.
/posts/:id: Muestra los detalles de una receta específica.
/posts/:id/editar: Permite editar una receta existente.
Operaciones CRUD
Crear Receta: Accede a la página de registro desde la página de inicio.
Editar Receta: Accede a la opción de edición desde la página de detalles de una receta.
Eliminar Receta: En la página de detalles de una receta, puedes eliminarla.
Estructura del Proyecto
app.js: Archivo principal de la aplicación Express.
controladores/posts.js: Controladores para las operaciones CRUD.
modelos/Post.js: Modelo Sequelize para las recetas.
rutas/routes.js: Definición de rutas principales.
vistas/: Carpeta que contiene las vistas EJS para las páginas HTML.
public/: Carpeta para archivos estáticos como CSS, imágenes, etc.

Licencia
MIT License
Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE para obtener más detalles.