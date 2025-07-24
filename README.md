# 🌸 GlowKorean - Tienda Fullstack MERN de Cosmética Coreana

**GlowKorean** es una tienda virtual completamente funcional de productos cosméticos coreanos, desarrollada con el stack MERN (MongoDB, Express, React, Node.js). Permite a los usuarios navegar, registrarse, iniciar sesión, agregar productos al carrito y simular procesos de compra.

---

## 🛍️ Funcionalidades principales

- Ver catálogo de productos con diseño responsivo
- Sistema de registro, login y autenticación con JWT
- Carrito de compras persistente (frontend y backend)
- Creación de productos desde vista admin
- Checkout simulado (estructura lista para integrar Stripe)
- Rutas protegidas (perfil, carrito)
- Panel de usuario con edición de datos
- Cookies seguras y manejo de sesión

---

## 🚀 Tecnologías usadas

### Frontend

- React
- React Router DOM
- Context API + useReducer
- TailwindCSS
- Vite
- PropTypes

### Backend

- Node.js
- Express
- MongoDB + Mongoose
- JWT (autenticación)
- bcryptjs
- dotenv
- cookie-parser

---

## 📁 Estructura del proyecto

GlowKorean/
├── backend/
│ ├── config/ # Conexión a MongoDB
│ ├── controllers/ # Lógica para usuarios, productos y carrito
│ ├── models/ # Esquemas Mongoose
│ ├── routes/ # Rutas API REST
│ ├── middleware/ # Autenticación JWT
│ ├── insert_products.js # Seeder inicial
│ └── index.js # Punto de entrada Express
├── frontend/
│ ├── src/
│ │ ├── components/ # UI principal
│ │ ├── contexts/ # Estado global (products, cart, user)
│ │ ├── routes/ # Rutas protegidas y públicas
│ │ ├── utils/ # Formateo CLP, helpers
│ │ ├── main.jsx # Entry point React
│ │ └── Router.jsx # Rutas principales
│ └── public/ # HTML base

yaml
Copy
Edit

---

## ⚙️ Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/glowkorean.git
cd glowkorean
2. Configura las variables de entorno
📦 backend/.env
ini
Copy
Edit
MONGO_URI=mongodb://localhost:27017/glowkorean
SECRET=una_clave_secreta_segura
NODE_ENV=development
💻 frontend/.env
bash
Copy
Edit
VITE_API_URL=http://localhost:3000/api
3. Instala dependencias
bash
Copy
Edit
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
▶️ Ejecución
En desarrollo
bash
Copy
Edit
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev
🧪 Poblado inicial de productos
bash
Copy
Edit
cd backend
node insert_products.js
Esto cargará productos de ejemplo en la base de datos.

🔒 Autenticación
Login y registro vía JWT

Cookies HTTP-only para sesiones seguras

Rutas protegidas (/perfil, /carrito) solo accesibles si el usuario está logueado

✅ Estado actual
Módulo	Estado
Catálogo	✅ Terminado
Registro/Login	✅ Terminado
Carrito	✅ Terminado
Checkout	✅ Simulado
Admin productos	✅ Terminado
API REST	✅ Completa
Seguridad JWT	✅ Implementada

🌐 Próximas mejoras (opcionales)
Integración real con Stripe

Panel de administración más avanzado

Historial de pedidos

Buscador de productos

📄 Licencia
Este proyecto está bajo licencia MIT.

Proyecto creado como parte de aprendizaje en desarrollo web fullstack.

yaml
Copy
Edit

---

¿Quieres también que te genere un GIF animado o screenshots HTML para incluir como preview visual en el README?






Ask ChatGPT
