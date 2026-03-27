# GUÍA PARA VIDEO DEMOSTRATIVO - W03 Project 2 Part 1

## INFORMACIÓN GENERAL DEL VIDEO

- **Duración**: 5-8 minutos (MÁX 8 minutos o recibirás CERO)
- **Plataforma**: YouTube (público o sin listar)
- **Contenido**: Demostrar que tu API funciona en Render
- **Audio**: Claro y audible
- **Resolución**: 1080p recomendado

---

## ESTRUCTURA RECOMENDADA DEL VIDEO (5-8 minutos)

### 1️⃣ INTRODUCCIÓN (30 segundos)
```
Hola, soy [tu nombre]. Este es mi W03 Project 2 Part 1.
Voy a demostrar una API REST con:
- 2 colecciones: Books y Authors
- CRUD operations (GET, POST, PUT, DELETE)
- Validación de datos
- Manejo de errores
- Documentación Swagger
```

### 2️⃣ DOCUMENTACIÓN SWAGGER (1 minuto)
1. Abre tu navegador en: `https://tuapp.onrender.com/api-docs`
2. Muestra la interfaz de Swagger
3. Explica brevemente:
   - "Estos son los endpoints disponibles"
   - "Tengo 2 colecciones principales: Books y Authors"
   - "Cada una con operaciones GET, POST, PUT, DELETE"

Encierra en un circulo o destaca los endpoints mientras explicas.

### 3️⃣ DEMOSTRACIÓN: BOOKS (2-3 minutos)

#### A. GET all Books
1. En Swagger, haz clic en `GET /books`
2. Click en **"Try it out"**
3. Click en **"Execute"**
4. Muestra la respuesta en JSON
5. Narra: "Aquí vemos todos los libros en la base de datos"

#### B. POST - Crear un libro (con validación)
1. Click en `POST /books`
2. Click en **"Try it out"**
3. Ingresa datos válidos:
```json
{
  "title": "The Pragmatic Programmer",
  "genre": "Software Engineering",
  "authorName": "David Thomas",
  "publishYear": 1999,
  "pages": 352,
  "language": "English",
  "inStock": true,
  "rating": 4.6
}
```
4. Click en **"Execute"**
5. Muestra respuesta 201 Created
6. Narra: "Creamos un nuevo libro, recibimos status 201"

#### C. POST - Validation error (mostrar validación)
1. Intenta crear un libro CON DATOS INVÁLIDOS:
```json
{
  "title": "A",
  "genre": "F"
}
```
2. Click en **"Execute"**
3. Muestra error 400 con mensaje de validación
4. Narra: "Si enviamos datos inválidos, recibimos un error 400 con un mensaje claro"

#### D. GET single book (por ID)
1. Copia el ID de un libro que creaste
2. Click en `GET /books/{id}`
3. Pega el ID
4. Click **"Execute"**
5. Muestra el libro específico
6. Narra: "Podemos obtener un libro específico por su ID"

#### E. PUT - Actualizar (Update)
1. Click en `PUT /books/{id}`
2. Usa el mismo ID anterior
3. Modifica algunos datos:
```json
{
  "title": "The Pragmatic Programmer - Updated",
  "genre": "Software Engineering",
  "authorName": "David Thomas",
  "publishYear": 2020,
  "pages": 400,
  "language": "English",
  "inStock": true,
  "rating": 4.8
}
```
4. Click **"Execute"**
5. Muestra respuesta 204 (No Content)
6. Narra: "Actualizamos el libro, recibimos status 204"

#### F. Verificar UPDATE en MongoDB
*IMPORTANTE - Esto demuestra que realmente se guardó en BD:*
1. Abre MongoDB Compass localmente
2. Conecta a tu base de datos
3. Navega a tu colección `books`
4. Muestra que el documento fue actualizado
5. Narra: "Aquí en MongoDB podemos ver que el documento fue actualizado correctamente"

#### G. DELETE - Eliminar
1. Click en `DELETE /books/{id}`
2. Usa un ID diferente (crea otro libro primero si es necesario)
3. Click **"Execute"**
4. Muestra respuesta 204
5. Narra: "Eliminamos un libro con status 204"

#### H. Verificar DELETE en MongoDB
1. Vuelve a MongoDB Compass
2. Refresca la colección
3. Muestra que el documento fue eliminado
4. Narra: "Confirmamos en MongoDB que el documento fue eliminado"

### 4️⃣ DEMOSTRACIÓN: AUTHORS (1.5-2 minutos)

Repite el mismo proceso pero más rápido:
1. GET all authors
2. POST con datos válidos (ej: Isabel Allende)
3. POST con datos inválidos (email incorrecto) - mostrar validación
4. GET single author
5. PUT actualización
6. DELETE

Evita repetir explicaciones largas, solo muestra:
- Status codes correctos
- Validación funcionando
- Cambios reflejados en MongoDB

### 5️⃣ CONCLUSIÓN (30 segundos)
```
"Como ves, todos los endpoints funcionan correctamente:
- Validación working ✓
- Error handling working ✓
- Database persistence working ✓
- API documentada con Swagger ✓

Gracias por revisar mi proyecto."
```

---

## PUNTOS CLAVE A DEMOSTRAR

### ✅ API Endpoints (50 pts)
- [ ] Demostrar GET /books (todos)
- [ ] Demostrar GET /books/{id} (uno)
- [ ] Demostrar POST /books (crear)
- [ ] Demostrar PUT /books/{id} (actualizar)
- [ ] Demostrar DELETE /books/{id} (eliminar)
- [ ] Repetir lo mismo para /authors
- [ ] Mostrar que los cambios se guardan en MongoDB
- [ ] Mostrar status codes correctos (201, 204, 404, etc)
- [ ] Demostrar que Swagger.json está presente y funcional

### ✅ Data Validation (25 pts)
- [ ] POST con datos válidos → Success 201
- [ ] POST con datos inválidos → Error 400
- [ ] Mostrar mensajes de validación claros
- [ ] PUT con datos inválidos → Error 400
- [ ] Validaciones para AMBAS colecciones (Books y Authors)

### ✅ Error Handling (15 pts)
- [ ] Intentar GET con ID inválido → Error 400
- [ ] Intentar GET con ID inexistente → Error 404
- [ ] Intentar crear sin campos requeridos → Error 400
- [ ] Error 500 si hay problemas del servidor (opcional demostrarlo)
- [ ] Mostrar try/catch en código si es necesario

### ✅ Deployment (10 pts)
- [ ] Demostrar que la app está en URL pública (Render)
- [ ] NO mostrar credenciales en GitHub (mencionar que usamos .env)
- [ ] La URL es accesible desde navegador

---

## GUÍA TÉCNICA PARA GRABAR

### Software recomendado:
- **Windows**: OBS Studio (GRATIS), Camtasia, ScreenFlow
- **Mac**: QuickTime + ScreenFlow, Camtasia
- **Linux**: OBS Studio

### Recomendaciones:
1. **Antes de grabar**:
   - Aumenta zoom del navegador a 125% para que se vea mejor
   - Cierra notificaciones y otras aplicaciones
   - Ten ejemplos listos (IDs de documentos)

2. **Durante la grabación**:
   - Habla claro y pausado
   - No vayas muy rápido (5-8 minutos es bastante contenido)
   - Pausa entre demostraciones
   - Destaca lo importante con cursor o zoom

3. **Edición básica**:
   - Recorta partes aburridas
   - Agrega título al inicio y final
   - Aumenta volumen si está bajo
   - Exporta como MP4 1080p

---

## PASOS PARA SUBIR A YOUTUBE

1. Ve a https://www.youtube.com
2. Haz clic en tu perfil (arriba a la derecha)
3. Click en **"Crear un vídeo"**
4. Selecciona tu archivo MP4
5. Título: `W03 Project 2 Part 1 - CRUD API - [Tu Nombre]`
6. Descripción:
```
W03 Project 2 Part 1 - CRUD Operations Demo

Demostración de API REST con:
- 2 colecciones (Books & Authors)
- CRUD operations (GET, POST, PUT, DELETE)
- Validación de datos
- Manejo de errores
- Documentación Swagger

GitHub: https://github.com/tuusuario/cse-341
Render: https://tuapp.onrender.com
```

7. Privacidad: Selecciona **"Sin listar"** (solo con link)
8. Click en **"Publicar"**
9. Copia el link de YouTube

---

## CHECKLIST FINAL

- [ ] Video tiene 5-8 minutos
- [ ] Se ven todos los CRUD operations
- [ ] Se demuestra validación (error 400)
- [ ] Se demuestra error handling (error 404, 400)
- [ ] Se muestra MongoDB actualizándose
- [ ] Status codes aparecenel en la demostración
- [ ] Swagger documentación visible
- [ ] Audio claro y entendible
- [ ] Video en YouTube (público o sin listar)
- [ ] Link del video copiado

---

## SCRIPT CON TIEMPOS

| Tiempo | Acción |
|--------|--------|
| 0:00-0:30 | Introducción |
| 0:30-1:30 | Swagger UI overview |
| 1:30-2:00 | GET /books |
| 2:00-2:30 | POST /books (válido) |
| 2:30-3:00 | POST /books (inválido) |
| 3:00-3:30 | GET /books/{id} |
| 3:30-4:00 | PUT /books/{id} |
| 4:00-4:30 | MongoDB verification |
| 4:30-5:00 | DELETE /books/{id} |
| 5:00-5:30 | AUTHORS endpoints (rápido) |
| 5:30-6:00 | Conclusión |

**Tiempo total: ~6 minutos** ✓

---

**¡Importante**: Asegúrate de que el video sea profesional y claro. Los evaluadores solo verán esto, así que cada detalle cuenta.
