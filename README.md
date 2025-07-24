# 🌸 GlowKorean

GlowKorean es una tienda en línea de productos cosméticos coreanos. Está construida con **React + Vite + TailwindCSS** en el frontend y **Node.js + Express + MongoDB** en el backend. Incluye autenticación con JWT, gestión de productos y un sistema de carrito funcional.

---

## 🚀 Tecnologías usadas

### 💻 Frontend
- React
- Vite
- TailwindCSS
- React Router DOM
- Axios

### 🖥️ Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- Cookie-parser
- Dotenv

---

## 🎯 Funcionalidades principales

- 🛍️ Catálogo de productos con descripción, imagen, precio y detalle
- 🔐 Registro e inicio de sesión con autenticación JWT
- 🛒 Carrito persistente con opción de modificar cantidades
- ✅ Checkout simulado
- 👩‍💼 Panel admin para crear productos
- 🧠 Manejo de errores (login, validaciones, rutas 404)
- 📱 Diseño responsive con TailwindCSS

---

## 🧠 Aprendizajes destacados

- Arquitectura fullstack con separación de frontend y backend
- Manejo de estado global con `useReducer` y Context
- Integración frontend-backend mediante API REST
- Autenticación segura con JWT y cookies HTTP-only
- CRUD completo con Mongoose
- Rutas protegidas con middleware y sesiones persistentes

---

## 🛠 Instalación local

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/glowkorean.git
cd glowkorean
```

### 2. Configura las variables de entorno

#### 📦 backend/.env

```env
MONGO_URI=mongodb://localhost:27017/glowkorean
SECRET=una_clave_segura
NODE_ENV=development
```

#### 💻 frontend/.env

```env
VITE_API_URL=http://localhost:5173/api
```

### 3. Instala las dependencias

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

---

## ▶️ Ejecución

```bash
# Backend
cd backend
npm run dev

# Frontend
cd ../frontend
npm run dev
```

---

## 🧪 Poblar productos de ejemplo

```bash
cd backend
node insert_products.js
```

Esto cargará productos ficticios en la base de datos.

---

## 📁 Estructura del proyecto

```bash
frontend/
├── components/     # Componentes reutilizables
├── contexts/       # Estado global (auth, cart, productos)
├── routes/         # Vistas protegidas
├── utils/          # Funciones auxiliares
├── Router.jsx      # Sistema de rutas
└── main.jsx        # Punto de entrada

backend/
├── controllers/    # Lógica de negocio
├── middleware/     # Middlewares JWT
├── models/         # Modelos de mongoose
├── routes/         # Rutas de Express
└── index.js        # Servidor principal
```

---

## 🔐 Autenticación

- JWT con cookies HTTP-only
- Rutas privadas (perfil, carrito)
- Persistencia de sesión
- Seguridad reforzada en frontend/backend

---

## ✅ Estado actual

| Módulo           | Estado       |
|------------------|--------------|
| Catálogo         | ✅ Terminado |
| Registro/Login   | ✅ Terminado |
| Carrito          | ✅ Terminado |
| Checkout         | ✅ Simulado  |
| Crear productos  | ✅ Terminado |
| API REST         | ✅ Completa  |
| Seguridad JWT    | ✅ Implementada |

---

## 🌐 Futuras mejoras

- Integración real con Stripe
- Historial de compras en panel admin
- Filtro y búsqueda avanzada
- Wishlist / Favoritos
- Sistema de notificaciones

---

## 📄 Licencia

Este proyecto está bajo licencia MIT.  
Desarrollado como parte del aprendizaje en desarrollo web fullstack.
