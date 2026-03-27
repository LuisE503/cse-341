# 🎯 PLAN DE ACCIÓN FINAL - Próximos Pasos

## 📊 Estado Actual: 87.5% COMPLETADO

Tu proyecto Node.js/MongoDB está al 87.5% listo. Necesitas completar 3 pasos finales:

---

## ⏱️ ESTIMADO DE TIEMPO TOTAL: 1-1.5 horas

| Paso | Duración | Prioridad |
|------|----------|-----------|
| 1. Verificación Local | 5 min | 🔴 CRÍTICA |
| 2. Publicar a Render | 15 min | 🔴 CRÍTICA |
| 3. Grabar & Subir Video | 30-45 min | 🔴 CRÍTICA |
| 4. Enviar en Canvas | 5 min | 🔴 CRÍTICA |

---

## PASO 1: VERIFICACIÓN LOCAL (5 minutos)

### 1️⃣ Inicia tu app localmente

En PowerShell (en la carpeta `project2-w03`):
```powershell
npm start
```

Deberías ver:
```
Connected to DB and listening on port 8080
```

### 2️⃣ Abre Swagger en navegador

```
http://localhost:8080/api-docs
```

Deberías ver la interfaz de Swagger con todos los endpoints.

### 3️⃣ Prueba un endpoint

En Swagger:
1. Click en `GET /books`
2. Click en "Try it out"
3. Click en "Execute"

Deberías ver una lista de libros (vacía o con datos existentes).

### ✅ Si todo funciona → Continúa al PASO 2

---

## PASO 2: PUBLICAR A RENDER (15 minutos)

### 📖 GUÍA COMPLETA: Ver [GUIA_RENDER.md](GUIA_RENDER.md)

### Resumen rápido:

#### 2.1 Push a GitHub
```powershell
# En la carpeta project2-w03
git add .
git commit -m "W03 Project 2 - Complete CRUD API"
git push origin main
```

#### 2.2 Crear cuenta/login en Render
- Ve a https://render.com
- Sign up con GitHub (o login si tienes cuenta)

#### 2.3 Crear Web Service
1. En Render dashboard: **"New +"** → **"Web Service"**
2. Selecciona tu repositorio
3. Configuración:
   ```
   Name: w03-project2-books-api
   Environment: Node
   Build Command: npm install
   Start Command: node server.js
   ```

#### 2.4 Agregar variables de entorno
En "Environment" agrega:
```
MONGODB_URI = [tu_mongodb_string_completo]
DB_NAME = project2_w03
```

#### 2.5 Esperar deployment
- Verás logs en la pestaña "Logs"
- Cuando veas "Connected to DB..." está listo ✅
- Tu URL será: `https://[nombre-app].onrender.com`

#### 2.6 Verificar que funciona
```
https://[nombre-app].onrender.com/api-docs
```

Deberías ver Swagger funcionando en Render.

### ✅ Si funciona → Copiar URL y continuar al PASO 3

---

## PASO 3: GRABAR & SUBIR VIDEO (30-45 minutos)

### 📖 GUÍA COMPLETA: Ver [GUIA_VIDEO.md](GUIA_VIDEO.md)

### Resumen rápido:

#### 3.1 Preparación
- Descarga OBS Studio (GRATIS) si no tienes software de grabación
- Abre tu Swagger en Render: `https://tuapp.onrender.com/api-docs`
- Ten varios ejemplos listos

#### 3.2 Qué grabar (5-8 minutos)
```
0:00-0:30  → Intro: "Hola, soy [nombre]. Esto es W03 Project 2..."
0:30-1:00  → Muestra Swagger UI
1:00-3:00  → Demuestra BOOKS: GET, POST (válido e inválido), PUT, DELETE
3:00-4:00  → Abre MongoDB Compass > muestra cambios guardados
4:00-5:00  → Demuestra AUTHORS (rápido)
5:00-5:30  → Conclusión

TOTAL: ~6 minutos ✓
```

#### 3.3 Lo importante a demostrar:
- ✅ GET /books → 200 (lista de libros)
- ✅ POST /books (válido) → 201 Created
- ✅ POST /books (inválido) → 400 Validation Error
- ✅ GET /books/{id} → 200
- ✅ PUT /books/{id} → 204 Updated
- ✅ DELETE /books/{id} → 204 Deleted
- ✅ Lo mismo para /authors
- ✅ Mostrar en MongoDB que los cambios se guardaron

#### 3.4 Exportar video
- Formato: MP4
- Resolución: 1080p
- Audio: claro

#### 3.5 Subir a YouTube
1. Ve a https://www.youtube.com
2. Click en tu perfil
3. "Create a video"
4. Selecciona tu archivo MP4
5. Título: `W03 Project 2 Part 1 - CRUD API - [Tu Nombre]`
6. Descripción:
   ```
   W03 Project 2 Part 1 - Books & Authors CRUD API
   
   Demostrando:
   - 2 colecciones MongoDB
   - CRUD operations (GET, POST, PUT, DELETE)
   - Validación de datos
   - Error handling
   - Swagger documentation
   ```
7. Privacidad: **"Sin listar"** (solo con link)
8. Publish

#### 3.6 Copiar el link del video
Ejemplo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`

### ✅ Si video está en YouTube → Ir al PASO 4

---

## PASO 4: ENVIAR EN CANVAS (5 minutos)

### Tienes 3 links listos:

1. **GitHub**: `https://github.com/[tu-usuario]/cse-341`
2. **Render**: `https://w03-project2-books-api.onrender.com`
3. **YouTube**: `https://www.youtube.com/watch?v=[video-id]`

### En Canvas:

1. Ve a tu clase CSE-341
2. Busca: "W03 Project: Project 2 Part 1"
3. Click en "Submit"
4. En el text box, escribe:
   ```
   GitHub: https://github.com/[tu-usuario]/cse-341
   Render: https://w03-project2-books-api.onrender.com
   YouTube: https://www.youtube.com/watch?v=XXXXX
   ```
5. Click **"Submit"**

### ✅ ¡LISTO! Proyecto completado al 100% 🎉

---

## 📋 CHECKLIST FINAL

- [ ] App funciona localmente (`npm start`)
- [ ] Swagger accesible en http://localhost:8080/api-docs
- [ ] Código pusheado a GitHub
- [ ] App publicada en Render
- [ ] URL de Render funciona (con /api-docs)
- [ ] Variables de entorno en Render configuradas
- [ ] Video grabado (5-8 minutos)
- [ ] Video en YouTube
- [ ] 3 links en Canvas

---

## 🆘 PROBLEMAS COMUNES & SOLUCIONES

| Problema | Solución |
|----------|----------|
| "npm: command not found" | Instala Node.js desde nodejs.org |
| "Cannot find .env" | Copia `.env.example` a `.env` y agrega credentials |
| "MongoDB connection failed" | Verifica tu IP en MongoDB Atlas › Network Access |
| "Render build fails" | Asegúrate de que package.json tiene "start" script |
| "Swagger no se ve en Render" | Espera 2-3 minutos a que compile, luego refresca |
| "Video muy borroso" | Aumenta zoom del navegador a 125% antes de grabar |

---

## 📞 PREGUNTAS FRECUENTES

**¿Puedo usar un nombre diferente para la app en Render?**
Sí, pero debe ser único y sin espacios. Ej: `libro-api-w03-[tunombre]`

**¿El video tiene que ser exactamente 5-8 minutos?**
Sí. Según la rúbrica: "Videos longer than the allotted time will receive a zero"

**¿Puedo usar cualquier software para grabar?**
Sí. OBS es gratis. También puedes usar Camtasia, ScreenFlow, o QuickTime.

**¿El video debe estar público?**
No. Puede estar "Sin listar" (solo con link). Canvas y el profesor pueden acceder.

**¿Qué pasa si el video se corta?**
Graba uno nuevo. YouTube te permite resubir el mismo archivo.

**¿Es obligatorio demostrar MongoDB?**
Sí, la rúbrica dice: "The video shows that updates are made to the database"

---

## 📞 SOPORTE TÉCNICO

Si tienes problemas:

1. **Revisar logs**:
   - Local: Terminal de PowerShell
   - Render: Pestaña "Logs" del servicio

2. **Documentación incluida**:
   - [CHECKLIST.md](CHECKLIST.md) - Estado de cada criterio
   - [GUIA_RENDER.md](GUIA_RENDER.md) - Deployment
   - [GUIA_VIDEO.md](GUIA_VIDEO.md) - Video tutorial
   - [README.md](README.md) - Documentación completa

3. **Verificar archivos**:
   - Todos los archivos están en el proyecto
   - Test con el archivo test.rest en VS Code

---

## 🎓 RESUMEN FINAL

### Lo que ya está hecho (87.5%):
✅ CRUD completo para 2 colecciones  
✅ Validación robusta de datos  
✅ Manejo de errores con try/catch  
✅ Documentación Swagger profesional  
✅ Configuración segura (.env protegido)  

### Con 1-1.5 horas máx, terminas:
✅ Publicar a Render  
✅ Grabar video de demostración  
✅ Subir a YouTube  
✅ Enviar en Canvas  
✅ **COMPLETAR AL 100% Y OBTENER 100 PUNTOS**

### Bonus (Week 04):
- OAuth 2.0 authentication
- JWT tokens
- Seguridad adicional

---

**¡Éxito en tu proyecto!** 🚀

Última actualización: 26 de Marzo, 2024
