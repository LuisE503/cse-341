# CHECKLIST COMPLETO DE RÚBRICA - W03 Project 2 Part 1

## 📋 ESTADO ACTUAL DEL PROYECTO

✅ = Completado  
⚠️ = En proceso / Necesita atención  
❌ = No completado

---

## 🎯 CRITERIO 1: API ENDPOINTS (50 pts)

**Rúbrica**: Swagger.json presente y testeable. CRUD operations funcionales para 2+ colecciones. Video muestra actualizaciones en BD. Status codes correctos.

### Sub-criterios:

- ✅ **Swagger.json presente**: Archivo creado y documentado
- ✅ **Swagger testeable**: UI en `/api-docs` accesible
- ✅ **GET all /books**: Implementado con error handling
- ✅ **GET /books/{id}**: Implementado con validación de ID
- ✅ **POST /books**: Implementado con validación
- ✅ **PUT /books/{id}**: Implementado con validación
- ✅ **DELETE /books/{id}**: Implementado
- ✅ **GET all /authors**: Implementado
- ✅ **GET /authors/{id}**: Implementado
- ✅ **POST /authors**: Implementado
- ✅ **PUT /authors/{id}**: Implementado
- ✅ **DELETE /authors/{id}**: Implementado

### Status codes correctos:
- ✅ **200**: GET exitoso
- ✅ **201**: POST exitoso (create)
- ✅ **204**: PUT/DELETE exitoso (no content)
- ✅ **400**: Validation error o invalid ID
- ✅ **404**: Recurso no encontrado
- ✅ **500**: Server error (try/catch)

### Demostración en video:
- ⚠️ **PENDIENTE**: Grabar video mostrando:
  - Todos los endpoints funcionando
  - Cambios persistentes en MongoDB
  - Status codes en la respuesta

---

## 🎯 CRITERIO 2: DATA VALIDATION (25 pts)

**Rúbrica**: POST y PUT para ambas colecciones contienen validación. Retorna 400/500 si no cumple requisitos.

### Validación de BOOKS:
- ✅ `title`: string, mínimo 2 caracteres
- ✅ `genre`: string, mínimo 2 caracteres
- ✅ `authorName`: string, mínimo 2 caracteres
- ✅ `publishYear`: integer 1000-2100
- ✅ `pages`: integer > 0
- ✅ `language`: string, mínimo 2 caracteres
- ✅ `inStock`: boolean obligatorio
- ✅ `rating`: number 0-5
- ✅ Status 400 si falta algún campo
- ✅ Status 400 si data es inválida

### Validación de AUTHORS:
- ✅ `fullName`: string, mínimo 3 caracteres
- ✅ `email`: formato email válido (regex)
- ✅ `country`: string, mínimo 2 caracteres
- ✅ `birthDate`: string formato fecha
- ✅ `primaryGenre`: string, mínimo 2 caracteres
- ✅ `awardsCount`: integer >= 0
- ✅ `active`: boolean obligatorio
- ✅ Status 400 si falta algún campo
- ✅ Status 400 si email es inválido

### Archivos de validación:
- ✅ [validators/books.js](validators/books.js)
- ✅ [validators/authors.js](validators/authors.js)

### Demostración en video:
- ⚠️ **PENDIENTE**: Mostrar:
  - POST con datos válidos → 201
  - POST con datos inválidos → 400 (mensaje claro)
  - PUT con datos inválidos → 400
  - Para AMBAS colecciones

---

## 🎯 CRITERIO 3: ERROR HANDLING (15 pts)

**Rúbrica**: Cada ruta usa try/catch. Retorna 400/500 si hay errores.

### Controllers con error handling:
- ✅ [controllers/books.js](controllers/books.js) - try/catch en todos los métodos
- ✅ [controllers/authors.js](controllers/authors.js) - try/catch en todos los métodos

### Errores manejados:
- ✅ **ID inválido**: Validación con ObjectId.isValid()
- ✅ **Documento no encontrado**: 404
- ✅ **Errores de validación**: 400
- ✅ **Errores de servidor**: 500

### Demostración en video:
- ⚠️ **PENDIENTE**: Mostrar:
  - GET con ID inválido → 400 "Invalid ID"
  - GET con ID inexistente → 404 "Not found"
  - Error 500 (si es posible demostrarlo)

---

## 🎯 CRITERIO 4: DEPLOYMENT (10 pts)

**Rúbrica**: Video muestra app en URL pública. Credenciales no están en GitHub.

### Checklist:
- ⚠️ **PENDIENTE**: Publish a Render
- ⚠️ **PENDIENTE**: URL pública funcional
- ✅ `.env` no está en git (en .gitignore)
- ✅ `.env.example` tiene valores de ejemplo
- ✅ Credenciales protegidas

### Antes de publicar:
- [ ] Verify `.env` is in `.gitignore`
- [ ] Verify no credentials in git history
- [ ] Create `.env.example` with placeholder values
- [ ] Test locally with `npm start` o `npm run dev`
- [ ] Verify Swagger works at `http://localhost:8080/api-docs`

---

## 📊 RESUMEN POR CRITERIO

| Criterio | Pts | Estado | Acción |
|----------|-----|--------|--------|
| **1. API Endpoints** | 50 | 90% | Grabar video demostrativo |
| **2. Data Validation** | 25 | 100% | Demostrar en video |
| **3. Error Handling** | 15 | 100% | Demostrar en video |
| **4. Deployment** | 10 | 60% | Publicar a Render + video en YouTube |
| **TOTAL** | **100** | **87.5%** | Ver "PRÓXIMOS PASOS" |

---

## 🚀 PRÓXIMOS PASOS (ORDEN PRIORITARIO)

### 1. Publicar a Render (15 minutos)
**Archivo**: [GUIA_RENDER.md](GUIA_RENDER.md)
- [ ] Push code a GitHub
- [ ] Crear cuenta en Render
- [ ] Nuevo Web Service
- [ ] Agregar variables de entorno
- [ ] Esperar deployment
- [ ] Verificar que funciona en URL pública

### 2. Grabar video (30-45 minutos)
**Archivo**: [GUIA_VIDEO.md](GUIA_VIDEO.md)
- [ ] Leer guía de video
- [ ] Preparar ejemplos
- [ ] Grabar demostración (5-8 min)
- [ ] Editar si es necesario
- [ ] Subir a YouTube

### 3. Enviar en Canvas (5 minutos)
Necesitas estos 3 links:
- [ ] GitHub: `https://github.com/tuusuario/cse-341`
- [ ] Render: `https://tuapp.onrender.com`
- [ ] YouTube: `https://www.youtube.com/watch?v=XXXXX`

---

## 📝 ARCHIVOS Y CARPETAS DEL PROYECTO

```
project2-w03/
├── controllers/
│   ├── books.js               ✅ Get, Post, Put, Delete
│   └── authors.js             ✅ Get, Post, Put, Delete
├── db/
│   └── connect.js             ✅ MongoDB connection
├── routes/
│   ├── index.js               ✅ Router setup
│   ├── books.js               ✅ Book routes
│   └── authors.js             ✅ Author routes
├── validators/
│   ├── books.js               ✅ Book validation rules
│   └── authors.js             ✅ Author validation rules
├── .env                       ✅ Credentials (NOT in git)
├── .env.example               ✅ Template para otros
├── .gitignore                 ✅ Excludes: .env, node_modules
├── package.json               ✅ Dependencies & scripts
├── server.js                  ✅ Express setup
├── swagger.json               ✅ API documentation
├── test.rest                  ✅ Test file with examples
├── GUIA_RENDER.md             ✅ Deployment guide
├── GUIA_VIDEO.md              ✅ Video recording guide
└── CHECKLIST.md               ✅ This file
```

---

## 🎬 ESTRUCTURA RECOMENDADA DEL VIDEO

Duración: 5-8 minutos máximo

1. **Intro** (30 seg): Nombre, proyecto, qué vas a mostrar
2. **Swagger** (1 min): Mostrar documentación
3. **Books CRUD** (2.5 min): GET, POST (valid + invalid), PUT, DELETE
4. **Database verification** (1 min): MongoDB Compass mostrando cambios
5. **Authors CRUD** (1 min): Rápido, main operations
6. **Conclusión** (30 seg): Resumen

**Total: ~6:30 minutos** ✓

---

## ✅ FINAL CHECKLIST ANTES DE ENVIAR

- [ ] Código en GitHub (main branch)
- [ ] `.env` NO está en GitHub
- [ ] `.env.example` existe con valores de ejemplo
- [ ] App deployada en Render y funcional
- [ ] Swagger accesible en `/api-docs`
- [ ] Video en YouTube (sin listar o público)
- [ ] Video tiene 5-8 minutos
- [ ] Video demuestra todos los endpoints
- [ ] Video muestra validación funcionando
- [ ] Video muestra datos guardados en MongoDB
- [ ] 3 links listos para Canvas:
  1. GitHub
  2. Render
  3. YouTube

---

## 📧 CÓMO ENVIAR EN CANVAS

1. Ve a Canvas
2. Busca la asignación "W03 Project: Project 2 Part 1"
3. Haz clic en "Submit"
4. En el text box, pega:
   ```
   GitHub: https://github.com/[usuario]/cse-341
   Render: https://[nombre-app].onrender.com
   YouTube: https://www.youtube.com/watch?v=[video-id]
   ```
5. Click en "Submit"

---

## 📞 TROUBLESHOOTING

### "Mi app se carga lenta en Render"
→ Render puede ponerla a dormir. Visítala cada 15 minutos para mantenerla activa, o usa tier de pago.

### "MongoDB connection refused"
→ Whitelist tu IP en MongoDB Atlas (Network Access)

### "Swagger no se ve en Render"
→ Verifica que `swagger-ui-express` está en `package.json`

### "Video se ve borroso"
→ Aumenta zoom navegador a 125%, graba en 1080p

### "Validación no funciona"
→ Verifica que controllers llaman a validadores correctamente

---

**Última actualización**: 26 de Marzo 2024  
**Estado general**: 87.5% completado  
**Tiempo restante estimado**: 1-1.5 horas
