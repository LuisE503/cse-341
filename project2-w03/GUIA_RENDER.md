# GUÍA DE PUBLICACIÓN A RENDER - W03 Project 2

## ✅ VERIFICACIÓN PREVIA

Antes de publicar, verifica que tu proyecto está listo:

### 1. Estructura de archivos correcta:
```
project2-w03/
├── .env (NO debe estar en GitHub)
├── .env.example (SÍ debe estar en GitHub)
├── .gitignore (contiene: node_modules y .env)
├── controllers/
│   ├── books.js
│   └── authors.js
├── db/
│   └── connect.js
├── routes/
│   ├── index.js
│   ├── books.js
│   └── authors.js
├── validators/
│   ├── books.js
│   └── authors.js
├── package.json
├── server.js
├── swagger.json
└── test.rest
```

### 2. Verificar archivos críticos:
- [ ] `.env` contiene tu MongoDB URI y DB_NAME
- [ ] `.env.example` tiene valores de ejemplo (SIN credenciales reales)
- [ ] `.gitignore` incluye `.env` y `node_modules`
- [ ] `package.json` tiene `"start": "node server.js"`
- [ ] No hay archivos `.env` subidos a GitHub

## 🚀 PASOS PARA PUBLICAR EN RENDER

### PASO 1: Preparar el repositorio GitHub

1. **Asegurate de que NO hayas subido credenciales**:
   ```bash
   git log --all --oneline -- .env
   ```
   Si aparece algo, debes hacer:
   ```bash
   git filter-branch --tree-filter 'rm -f .env' -- --all
   git push --force origin main
   ```

2. **Push final a GitHub**:
   ```bash
   git add .
   git commit -m "W03 Project 2 Part 1 - Complete CRUD API with validation"
   git push origin main
   ```

### PASO 2: Crear cuenta en Render (si no la tienes)

1. Ve a https://render.com
2. Haz clic en "Sign up"
3. Usa tu cuenta de GitHub para registrarte
4. Verifica tu email

### PASO 3: Crear un nuevo servicio en Render

1. En el dashboard de Render, haz clic en **"New +"** → **"Web Service"**
2. Selecciona **"Deploy an existing GitHub repository"**
3. Busca y selecciona tu repositorio `cse-341` (o tu repo específico)
4. Configura los siguientes valores:

   | Campo | Valor |
   |-------|-------|
   | **Name** | `w03-project2-books-api` (sin espacios) |
   | **Environment** | `Node` |
   | **Build Command** | `npm install` |
   | **Start Command** | `node server.js` |
   | **Runtime** | `node-16` o superior |

### PASO 4: Configurar variables de entorno

1. En la página de tu servicio, ve a **"Environment"** (o **"Settings"**)
2. Haz clic en **"Add Environment Variable"**
3. Agrega las siguientes variables:

   ```
   MONGODB_URI = mongodb+srv://tu_usuario:tu_contraseña@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   DB_NAME = project2_w03
   PORT = (Render asigna automáticamente el puerto, pero déjalo vacío)
   ```

   **IMPORTANTE**: Copia exactamente tus credenciales de MongoDB desde tu `.env` local

4. Haz clic en **"Create Web Service"**

### PASO 5: Esperar el deployment

Render construirá y desplegará tu aplicación automáticamente:
- Ve al tab **"Logs"** para ver el proceso
- Cuando veas: `Connected to DB and listening on port...` ✅ está listo
- Tu URL será algo como: `https://w03-project2-books-api.onrender.com`

### PASO 6: Verificar que funciona

1. Abre tu navegador y ve a: `https://tuapp.onrender.com/api-docs`
2. Deberías ver Swagger UI
3. Haz clic en **"Try it out"** en cualquier endpoint para probarlo
4. Verifica que puedas:
   - ✅ Hacer GET /books
   - ✅ Crear un libro con POST /books
   - ✅ Actualizar con PUT /books/{id}
   - ✅ Eliminar con DELETE /books/{id}
   - ✅ Lo mismo para /authors

## ⚠️ PROBLEMAS COMUNES

### Error: "Cannot find module 'dotenv'"
**Solución**: En Render, agrega a tu `package.json`:
```json
"engines": {
  "node": "18"
}
```

### Error: "connection refused to MongoDB"
**Solución**: 
- Verifica que tu IP está whitelisted en MongoDB Atlas
- Ve a MongoDB Atlas → Network Access → Add Current IP

### Error: "Invalid API Key"
**Solución**: 
- Copia exactamente tu MongoDB URI desde Atlas (sin espacios extra)
- Verifica que la contraseña no tiene caracteres especiales URL sin codificar

### La API es lenta después del deploy
**Punto importante**: Render pone apps a dormir si no hay actividad. Haz una petición cada 10-15 minutos para mantenerla activa, o usa el tier de pago.

## 📋 CHECKLIST DE PUBLICACIÓN

- [ ] Repositorio GitHub actualizado con todos los cambios
- [ ] `.env` NO está en GitHub (solo `.env.example`)
- [ ] Project creado en Render
- [ ] Variables de entorno configuradas en Render
- [ ] API responde correctamente en `https://tuapp.onrender.com`
- [ ] Swagger documenta todos los endpoints
- [ ] Todos los CRUD operations funcionan desde Render
- [ ] Status codes correctos (201, 204, 400, 404, 500)

---

**Nota**: Tu app estará disponible en:
- **URL público**: `https://w03-project2-books-api.onrender.com`
- **Swagger Docs**: `https://w03-project2-books-api.onrender.com/api-docs`
