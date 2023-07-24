# E-commerce Web App

## Descripción
Este es un proyecto de una aplicación web de e-commerce, donde los usuarios pueden ver productos, agregarlos al carrito de compras y realizar compras. También incluye funcionalidades de autenticación, administración de usuarios y administración de productos.

## Instalación
1. Clona este repositorio: `git clone <URL_del_repositorio>`
2. Instala las dependencias: `npm install`

## Configuración
1. Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables de entorno:

- MONGO_URI: Es la URL de conexión a la base de datos MongoDB.
- CLIENT_ID: Es el ID del cliente de la aplicación utilizado para autenticar un servicio de terceros, en este caso, GitHub.
- CLIENT_SECRET: Es el secreto del cliente de la aplicación utilizado para autenticar GitHub.
- CALLBACK_URL: Es la URL a la que se redireccionará después de que el usuario haya iniciado sesión en GitHub y dado su consentimiento.
- JWT_SECRET: Es la clave secreta utilizada para firmar y verificar los tokens de JSON Web (JWT) generados por la aplicación.
- PORT: Es el número de puerto en el que se ejecutará la aplicación, en este caso, 8080.
- NODE_ENV: Es una variable de entorno que indica el entorno de ejecución de la aplicación, en este caso, "production".
- COOKIE_SECRET: Es la clave secreta utilizada para firmar las cookies enviadas al navegador del usuario.
- STRIPE_SECRET: Es el secreto utilizado para autenticarse con el servicio de pagos Stripe.
- ADMIN_EMAIL: Es el correo electrónico del administrador de la aplicación.
- ADMIN_PASSWORD: Es la contraseña del administrador de la aplicación.
- SUCCESS_URL: Es la URL a la que se redireccionará después de un pago exitoso.
- CANCEL_URL: Es la URL a la que se redireccionará después de un pago cancelado.
- USER_EMAIL: Es el correo electrónico de un usuario registrado en la aplicación, utilizado para enviar correos electrónicos a los usuarios.
- USER_PASS: Es la contraseña del usuario registrado en la aplicación, utilizada para enviar correos electrónicos a los usuarios.
- URL_PRODUCTS: Es la URL de una ruta o servicio que proporciona información sobre los productos disponibles en la aplicación.

## Uso
1. Ejecuta el servidor: `npm start` o `npm run dev` (nodemon).
2. Abre tu navegador y visita `http://localhost:8080/api/products`

## Algunas Funcionalidades
- Registro e inicio de sesión de usuarios.
- Ver listado de productos y detalles de cada producto.
- Agregar productos al carrito de compras.
- Realizar compras con una cuenta premium.
- Restablecimiento de contraseña por correo electrónico.
- Administración de usuarios (solo para usuarios con rol de administrador).
- Administración de productos (solo para usuarios con rol de administrador).
- Pasarela de Pago con Stripe.
- Envío de Correos electrónicos con Nodemailer.
- Entre otras funcionalidades...

## Algunas Tecnologías utilizadas
- Node.js
- Express.js
- Passport.js (para autenticación)
- MongoDB (como base de datos)
- Bootstrap (para el diseño)
- Handlebars
- Swagger
- Multer
- Mocha
- Chai
- Supertest
- Winston
- Entre otras tecnologías...

## Estructura del Proyecto
- El proyecto está organizado en varias carpetas: `controllers`, `middlewares`, `routes`, `views`, `utils`, `services`, etc.

## Contribución
- Si deseas contribuir al proyecto, sigue estos pasos:
  1. Haz un fork del repositorio.
  2. Crea una rama para tu contribución: `git checkout -b mi-contribucion`
  3. Realiza tus cambios y haz commit: `git commit -m "Mi contribución"`
  4. Haz push a tu repositorio: `git push origin mi-contribucion`
  5. Crea un pull request para que revisemos tus cambios.

## Autor
- Casto Gil

