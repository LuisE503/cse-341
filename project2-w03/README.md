# W03 Project 2 Part 1 - Books & Authors CRUD API

[![Node.js](https://img.shields.io/badge/Node.js-18+-brightgreen)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.21+-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)](https://www.mongodb.com/cloud/atlas)

## 📋 Descripción del Proyecto

REST API profesional para gestionar una biblioteca digital con **Books** (Libros) y **Authors** (Autores). Implementa operaciones CRUD completas, validación robusta de datos, manejo avanzado de errores y documentación automática con Swagger.

### Características principales:
- ✅ **CRUD Operations**: GET, POST, PUT, DELETE para 2 colecciones
- ✅ **Validación de datos**: Reglas de negocio estrictas
- ✅ **Manejo de errores**: Try/catch en todos los endpoints
- ✅ **Documentación Swagger**: UI interactiva en `/api-docs`
- ✅ **MongoDB Atlas**: Base de datos en la nube
- ✅ **Variables de entorno**: Credenciales protegidas con dotenv
- ✅ **Status codes HTTP**: Implementación correcta de códigos

---

## 🗂️ Estructura del Proyecto

```
project2-w03/
├── controllers/              # Lógica de negocio
│   ├── books.js             # Funciones CRUD para libros
│   └── authors.js           # Funciones CRUD para autores
├── db/
│   └── connect.js           # Conexión a MongoDB
├── routes/                   # Definición de endpoints
│   ├── index.js             # Router principal
│   ├── books.js             # Rutas de /books
│   └── authors.js           # Rutas de /authors
├── validators/              # Validación de datos
│   ├── books.js             # Reglas de libros
│   └── authors.js           # Reglas de autores
├── .env                     # Variables de entorno (NO incluir en git)
├── .env.example             # Template de variables
├── .gitignore               # Archivos a excluir de git
├── package.json             # Dependencias y scripts
├── server.js                # Configuración Express
├── swagger.json             # Documentación API
├── test.rest                # Tests REST para VS Code
├── CHECKLIST.md             # Rúbrica del proyecto
├── GUIA_RENDER.md           # Cómo publicar en Render
└── GUIA_VIDEO.md            # Cómo grabar el video
```

---

## 📦 Dependencias

### Production
- **express** (4.21.2): Framework web para Node.js
- **mongodb** (6.15.0): Cliente MongoDB oficial
- **dotenv** (16.4.5): Gestión de variables de entorno
- **swagger-ui-express** (5.0.1): UI para documentación Swagger

### Development
- **nodemon** (3.1.9): Auto-reload durante desarrollo

---

## 🚀 Instalación y Setup Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/[tu-usuario]/cse-341.git
cd project2-w03
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
```bash
# Crear .env basado en .env.example
cp .env.example .env
```

Editar `.env` con tus credenciales:
```env
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
DB_NAME=project2_w03
PORT=8080
```

### 4. Obtener tu MongoDB URI
1. Ve a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Selecciona tu cluster
3. Click en "Connect"
4. Selecciona "Drivers"
5. Copia el connection string
6. Reemplaza `<password>` con tu contraseña real

### 5. Ejecutar localmente
```bash
# Desarrollo (con auto-reload)
npm run dev

# Producción
npm start
```

### 6. Verificar que funciona
Abre en tu navegador:
- **API**: http://localhost:8080
- **Documentación**: http://localhost:8080/api-docs

---

## 📚 Colecciones de MongoDB

### Books (8 campos - cumple requisito mínimo 7)
```json
{
  "_id": ObjectId,
  "title": "Clean Code",              // string, 2+ caracteres
  "genre": "Software Development",    // string, 2+ caracteres
  "authorName": "Robert C. Martin",   // string, 2+ caracteres
  "publishYear": 2008,                // integer, 1000-2100
  "pages": 464,                       // integer, > 0
  "language": "English",              // string, 2+ caracteres
  "inStock": true,                    // boolean
  "rating": 4.7                       // number, 0-5
}
```

### Authors (7 campos - cumple requisito exacto)
```json
{
  "_id": ObjectId,
  "fullName": "Isabel Allende",       // string, 3+ caracteres
  "email": "isabel@example.com",      // string, formato email válido
  "country": "Chile",                 // string, 2+ caracteres
  "birthDate": "1942-08-02",          // string, formato fecha YYYY-MM-DD
  "primaryGenre": "Fiction",          // string, 2+ caracteres
  "awardsCount": 15,                  // integer, >= 0
  "active": true                      // boolean
}
```

---

## 🔌 API Endpoints

### Books
| Método | Ruta | Descripción | Status Codes |
|--------|------|-------------|--------------|
| GET | `/books` | Obtener todos los libros | 200, 500 |
| GET | `/books/{id}` | Obtener un libro por ID | 200, 400, 404, 500 |
| POST | `/books` | Crear nuevo libro | 201, 400, 500 |
| PUT | `/books/{id}` | Actualizar un libro | 204, 400, 404, 500 |
| DELETE | `/books/{id}` | Eliminar un libro | 204, 400, 404, 500 |

### Authors
| Método | Ruta | Descripción | Status Codes |
|--------|------|-------------|--------------|
| GET | `/authors` | Obtener todos los autores | 200, 500 |
| GET | `/authors/{id}` | Obtener un autor por ID | 200, 400, 404, 500 |
| POST | `/authors` | Crear nuevo autor | 201, 400, 500 |
| PUT | `/authors/{id}` | Actualizar un autor | 204, 400, 404, 500 |
| DELETE | `/authors/{id}` | Eliminar un autor | 204, 400, 404, 500 |

---

## 🔐 Seguridad

### ✅ Implementado
- Validación de entrada en todos los endpoints
- Manejo robusto de errores
- Credenciales en variables de entorno
- `.env` en `.gitignore`

### 📋 Próximos pasos (Week 04)
- OAuth 2.0 para autenticación
- JWT tokens para autorización
- CORS configuration

---

## 🧪 Testing

### Usando REST Client en VS Code
1. Instala la extensión: [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
2. Abre [test.rest](test.rest)
3. Click en "Send Request" sobre cada operación

### Usando Swagger
1. Abre http://localhost:8080/api-docs
2. Click en "Try it out"
3. Relena los datos
4. Click "Execute"

### Usando cURL
```bash
# GET todos los libros
curl http://localhost:8080/books

# POST un nuevo libro
curl -X POST http://localhost:8080/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Clean Code",
    "genre": "Software",
    "authorName": "Robert Martin",
    "publishYear": 2008,
    "pages": 464,
    "language": "English",
    "inStock": true,
    "rating": 4.7
  }'
```

---

## 🎓 Validación de Datos

### Books Validation
```javascript
// Campos requeridos
- title: string, mínimo 2 caracteres
- genre: string, mínimo 2 caracteres
- authorName: string, mínimo 2 caracteres
- publishYear: integer, 1000-2100
- pages: integer, > 0
- language: string, mínimo 2 caracteres
- inStock: boolean (true/false)
- rating: número, 0-5

// Ejemplo de error 400
{
  "message": "rating must be a number between 0 and 5."
}
```

### Authors Validation
```javascript
// Campos requeridos
- fullName: string, mínimo 3 caracteres
- email: string, formato email válido
- country: string, mínimo 2 caracteres
- birthDate: string, formato YYYY-MM-DD
- primaryGenre: string, mínimo 2 caracteres
- awardsCount: integer, >= 0
- active: boolean (true/false)

// Ejemplo de error 400
{
  "message": "email must be a valid email address."
}
```

---

## 🌍 Deployment

### Publicar a Render
Ver [GUIA_RENDER.md](GUIA_RENDER.md) para instrucciones completas.

**URL de ejemplo**: `https://w03-project2-books-api.onrender.com`

### Variables de entorno en Render
```
MONGODB_URI = tu_mongodb_connection_string
DB_NAME = project2_w03
```

---

## 📹 Video Demostrativo

Ver [GUIA_VIDEO.md](GUIA_VIDEO.md) para instrucciones detalladas sobre:
- Qué demostrar
- Duración recomendada
- Cómo grabar y subir a YouTube

---

## 📋 Rúbrica del Proyecto

Ver [CHECKLIST.md](CHECKLIST.md) para:
- Estado actual de cada criterio
- Checklist de validación
- Próximos pasos
- Links para enviar

### Puntuación esperada:
- API Endpoints: 50 pts
- Data Validation: 25 pts
- Error Handling: 15 pts
- Deployment: 10 pts
- **TOTAL: 100 pts**

---

## 🐛 Troubleshooting

### "Cannot find module 'X'"
```bash
npm install
```

### "Connection refused: MongoDB"
1. Verifica tu IP en MongoDB Atlas (Network Access)
2. Verifica MONGODB_URI en .env
3. Verifica que MongoDB Atlas cluster está activo

### "Invalid API Key in connection string"
Copia nuevamente el connection string desde MongoDB Atlas sin modificar.

### "Swagger no se carga"
Verifica que `swagger-ui-express` está instalado:
```bash
npm list swagger-ui-express
```

---

## 📚 Referencias

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [OpenAPI/Swagger Spec](https://swagger.io/specification/)
- [HTTP Status Codes](https://httpwg.org/specs/rfc7231.html#status.codes)

---

## 👤 Autor

[Tu nombre y CSE-341]

---

## 📄 Licencia

Este proyecto es parte del curso CSE-341 y está sujeto a los términos de uso del curso.

---

**Última actualización**: 26 de Marzo, 2024  
**Estado**: Production Ready (W03 Part 1)  
**Próxima fase**: OAuth 2.0 (Week 04)
