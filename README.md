# Ecommerce.end

Plataforma e-commerce completa con carrito, pasarela de pagos, autenticación y tests.

## 🚀 Características
- Catálogo de productos con CRUD completo.
- Carrito de compras con persistencia en MongoDB.
- Procesamiento de pagos usando Stripe Checkout y webhooks.
- Autenticación y autorización con Passport (GitHub OAuth) y JWT (cookies).
- Roles: admin / user / premium con vistas y permisos diferenciados.
- Subida de documentos con Multer (perfil, identificación, comprobante domicilio, etc.).
- Enío de emails transaccionales (recupero de contraseña).
- Endpoints documentados con Swagger.
- Tests de API (Mocha, Chai, Supertest).

## 💍 Tecnologías
- Node.js y Express
- MongoDB + Mongoose
- Handlebars para vistas
- Passport.js, JWT y cookies
- Stripe
- Multer
- Swagger
- Mocha, Chai, Supertest
- Nodemailer

## 🔧 Instalación

    git clone https://github.com/CastoGil/Ecommerce.end.git
    cd Ecommerce.end
    npm ci
    cp .env.example .env        # copia el archivo de ejemplo y completa las variables
    npm run dev                 # inicia el servidor con nodemon

### Variables de entorno (.env)

    PORT=3000
    MONGO_URI=mongodb+srv://usuario:clave@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority
    JWT_SECRET=tu_jwt_secreto
    STRIPE_SECRET=tu_clave_secreta_de_stripe
    GITHUB_CLIENT_ID=tu_id_de_cliente_github
    GITHUB_CLIENT_SECRET=tu_cliente_secret_github
    GITHUB_CALLBACK_URL=http://localhost:3000/api/sessions/githubcallback
    ADMIN_EMAIL=admin@tudominio.com
    ADMIN_PASSWORD=contraseña_admin


## 🥫 Scripts

- `npm run dev`: inicia con nodemon para desarrollo.
- `npm start`: ejecuta en modo producción.
- `npm test`: corre tests unitarios y de endpoints.

## 🌐 Uso

- Visita http://localhost:3000 para cargar el catálogo.
- Crea un usuario o inicia sesión con GitHub.
- Agrega productos al carrito y finaliza la compra.
- Accede al panel de administrador para gestionar productos y usuarios.

## 📦 API

La API REST está documentada con Swagger disponible en http://localhost:3000/api/docs. Incluye operaciones sobre usuarios, productos, carritos y sesiones.

## ✅ Próximos pasos
- Dockerización y despliegue a escala.
- Pruebas de integración end‑to‑end.
- Mejora de la cobertura de tests.

## 🤝 Contribuciones
¡Las contribuciones son bienvenidas! Crea un fork, realiza tu branch, implementa los cambios y abre un Pull Request.

## 📝 Licencia
Este proyecto está bajo la licencia MIT.
