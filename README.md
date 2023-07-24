# E-commerce Web App

## Descripción
Este es un proyecto de una aplicación web de e-commerce, donde los usuarios pueden ver productos, agregarlos al carrito de compras y realizar compras. También incluye funcionalidades de autenticación, administración de usuarios y administración de productos.

## Instalación
1. Clona este repositorio: `git clone <URL_del_repositorio>`
2. Instala las dependencias: `npm install`

## Configuración
1. Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables de entorno:
   
MONGO_URI: Es la URL de conexión a la base de datos MongoDB. Esta variable se utiliza para conectar la aplicación a la base de datos y permite acceder y manipular los datos almacenados en ella.
client_ID: Es el ID del cliente de la aplicación. En este caso, para ser utilizado para autenticar un servicio de terceros, GitHub.
client_Secret: Es el secreto del cliente de la aplicación. Al igual que el client_ID, se utiliza para autenticar GitHub.
callback_URL: Es la URL a la que se redireccionará después de que el usuario haya iniciado sesión en el servicio de terceros y haya dado su consentimiento. En este caso, para ser utilizado para la autenticación con GitHub.
JWT_SECRET: Es la clave secreta utilizada para firmar y verificar los tokens de JSON Web (JWT) generados por la aplicación. Los JWT son utilizados para autenticar y autorizar a los usuarios.
PORT: Es el número de puerto en el que se ejecutará la aplicación. En este caso, la aplicación se ejecutará en el puerto 8080.
NODE_ENV: Es una variable de entorno que indica el entorno de ejecución de la aplicación. En este caso, está establecido como "production", lo que significa que la aplicación se ejecutará en modo de producción.
COOKIE_SECRET: Es la clave secreta utilizada para firmar las cookies que se envían al navegador del usuario. Las cookies se utilizan para mantener el estado de la sesión y la autenticación del usuario.
STRIPE_SECRET: Es el secreto utilizado para autenticarse con el servicio de pagos Stripe. Stripe es una plataforma de pagos en línea que permite a la aplicación procesar pagos de los usuarios.
ADMIN_EMAIL: Es el correo electrónico del administrador de la aplicación. Puede utilizarse para acceder a funciones de administración y configuración.
ADMIN_PASSWORD: Es la contraseña del administrador de la aplicación. Se utiliza para autenticar al administrador y acceder a funciones de administración.
SUCCESS_URL: Es la URL a la que se redireccionará después de que un pago haya sido exitoso. En este caso, sera utilizada para gestionar pagos mediante Stripe.
CANCEL_URL: Es la URL a la que se redireccionará después de que un pago haya sido cancelado. En este caso, también sera utilizada para gestionar pagos mediante Stripe.
USER_EMAIL: Es el correo electrónico de un usuario registrado en la aplicación. Se utiliza para DEFINIR EL ENVIO DE CORREOS ELECTRONICOS a los usuarios.
USER_PASS: Es la contraseña del usuario registrado en la aplicación. Se utiliza para HACER EL ENVIO DE CORREOS  a los usuarios.
URL_PRODUCTS: Es la URL de una ruta o servicio que proporciona información sobre los productos disponibles en la aplicación.

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
- Pasarela de Pago con Stripe
- Envio de Correos electronicos con Nodemailer
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
- Entre otras tecnologias...
  
## Estructura del Proyecto
- El proyecto está organizado en varias carpetas: `controllers`, `middlewares`, `routes`, `views`, `utils`,`services` etc.

## Contribución
- Si deseas contribuir al proyecto, sigue estos pasos:
  1. Haz un fork del repositorio.
  2. Crea una rama para tu contribución: `git checkout -b mi-contribucion`
  3. Realiza tus cambios y haz commit: `git commit -m "Mi contribución"`
  4. Haz push a tu repositorio: `git push origin mi-contribucion`
  5. Crea un pull request para que revisemos tus cambios.

## Autores
- Casto Gil

