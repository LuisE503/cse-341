# 🚀 QUICK START - TARJETA DE REFERENCIA

## ESTADO: 87.5% ✅ | TIEMPO RESTANTE: 1-1.5 horas

---

## 3 PASOS FINALES

### 1. PUBLICAR A RENDER (15 min)
```bash
# En PowerShell, carpeta project2-w03
git add .
git commit -m "W03 Project - CRUD API Ready"
git push origin main
```

→ Ve a https://render.com  
→ New Web Service → GitHub  
→ Selecciona repo  
→ Name: `w03-project2-books-api`  
→ Add Env Vars: `MONGODB_URI`, `DB_NAME`  
→ **Esperar deploy (~2 min)**

**Result**: `https://w03-project2-books-api.onrender.com`

---

### 2. GRABAR VIDEO (30-45 min)
```
Abre Swagger en Render:
https://[tuapp].onrender.com/api-docs
```

**Demostrar en 5-8 minutos**:
- GET /books → 200 ✓
- POST /books (válido) → 201 ✓
- POST /books (inválido) → 400 ✓  
- PUT /books/{id} → 204 ✓
- DELETE /books/{id} → 204 ✓
- MongoDB muestra cambios ✓
- Lo mismo para /authors (rápido) ✓

→ Grabar con OBS/Camtasia  
→ MP4 1080p  
→ Subir a YouTube  
→ Seleccionar "Sin listar"

**Result**: `https://youtube.com/watch?v=XXXXX`

---

### 3. ENVIAR EN CANVAS (5 min)
```
W03 Project: Project 2 Part 1 → Submit

GitHub: https://github.com/[usuario]/cse-341
Render: https://w03-project2-books-api.onrender.com
YouTube: https://youtube.com/watch?v=XXXXX
```

Click Submit ✓

---

## VERIFICACIÓN PRE-RENDER

```bash
# En carpeta project2-w03
npm start
# Esperar: "Connected to DB and listening on port 8080"

# En navegador:
http://localhost:8080/api-docs
# Deberías ver Swagger
```

---

## ESTRUCTURA PROYECTO

```
project2-w03/
✅ controllers/   (books.js, authors.js)
✅ db/            (connect.js)
✅ routes/        (books.js, authors.js, index.js)
✅ validators/    (books.js, authors.js)
✅ .env           (NO subir a Git)
✅ .env.example   (SÍ subir)
✅ .gitignore     (contiene .env)
✅ package.json
✅ server.js
✅ swagger.json
✅ test.rest
```

---

## CHECKLIST ENDPOINTS

### Books
- ✅ GET /books (todos)
- ✅ GET /books/{id} (uno)
- ✅ POST /books (crear)
- ✅ PUT /books/{id} (actualizar)
- ✅ DELETE /books/{id} (eliminar)

### Authors
- ✅ GET /authors (todos)
- ✅ GET /authors/{id} (uno)
- ✅ POST /authors (crear)
- ✅ PUT /authors/{id} (actualizar)
- ✅ DELETE /authors/{id} (eliminar)

---

## STATUS CODES

```
200 → GET exitoso
201 → POST exitoso
204 → PUT/DELETE exitoso
400 → Validación error
404 → No encontrado
500 → Server error
```

---

## VALIDACIÓN BOOKS

```
title        : string, 2+ chars ✓
genre        : string, 2+ chars ✓
authorName   : string, 2+ chars ✓
publishYear  : integer, 1000-2100 ✓
pages        : integer, >0 ✓
language     : string, 2+ chars ✓
inStock      : boolean ✓
rating       : number, 0-5 ✓
```

---

## VALIDACIÓN AUTHORS

```
fullName      : string, 3+ chars ✓
email         : email válido ✓
country       : string, 2+ chars ✓
birthDate     : YYYY-MM-DD ✓
primaryGenre  : string, 2+ chars ✓
awardsCount   : integer, >=0 ✓
active        : boolean ✓
```

---

## ERRORES COMUNES

| Problema | Fix |
|----------|-----|
| "MongoDB refused" | Whitelist IP en MongoDB Atlas |
| "Invalid credentials" | Verificar connection string en .env |
| "Port already in use" | `npm run dev` aunque `npm start` esté activo |
| "Swagger 404" | Espera 2 min después de deploy Render |
| "Video borroso" | Zoom navegador 125% antes de grabar |

---

## ARCHIVOS CLAVE

📄 **Leer primero**: [PROXIMOS_PASOS.md](PROXIMOS_PASOS.md)  
📋 **Rúbrica**: [CHECKLIST.md](CHECKLIST.md)  
🌍 **Render**: [GUIA_RENDER.md](GUIA_RENDER.md)  
🎬 **Video**: [GUIA_VIDEO.md](GUIA_VIDEO.md)  
📊 **Ejecutivo**: [RESUMEN_EJECUTIVO.md](RESUMEN_EJECUTIVO.md)  

---

## TIMING

```
Local verify      : 5 min
Push + Render     : 15 min
Video             : 30-45 min
Canvas            : 5 min
──────────────────────
TOTAL            : 1-1.5 hours
```

---

## PUNTUACIÓN

```
API Endpoints  : 50 pts ✅
Validation     : 25 pts ✅
Error Handling : 15 pts ✅
Deployment     : 10 pts ⏳ (Render)
──────────────────────
TOTAL          : 100 pts 🎯
```

Con Render + Video = **100/100**

---

## RENDER SETUP RÁPIDO

```
Name          : w03-project2-books-api
Environment   : Node
Build         : npm install
Start         : node server.js

Environment Variables:
- MONGODB_URI: [tu_connection_string]
- DB_NAME: project2_w03
```

---

## VIDEO ESTRUCTURA

```
0:00-0:30   Intro
0:30-3:00   Books: GET, POST (valid/invalid), PUT, DELETE
3:00-4:00   MongoDB verification
4:00-5:00   Authors (rápido)
5:00-6:00   Conclusión
────────────
≈ 6 min ✓
```

---

## CANVAS SUBMISSION

```
Link format:
https://github.com/usuario/cse-341
https://w03-project2-books-api.onrender.com
https://youtube.com/watch?v=VIDEO_ID
```

---

**Status**: Ready to Deploy 🚀  
**Next**: Publicar a Render  
**Estimated**: 1.5 hours para 100/100
