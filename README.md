<div align="center">
  <h1>🐾 Love4Pets</h1>
  <p><strong>Plataforma integral para la adopción, cuidado y protección de animales</strong></p>
  
  ![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
  ![TypeORM](https://img.shields.io/badge/TypeORM-FE0803?style=for-the-badge&logo=typeorm&logoColor=white)
  ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
</div>

---

## 📖 Descripción

*Love4Pets* es una plataforma completa para facilitar la adopción de animales, gestionar refugios y coordinar campañas de voluntariado. El proyecto implementa dos arquitecturas de API: *REST* y *GraphQL*, demostrando diferentes enfoques para servicios web modernos.

### 🎯 Objetivo

Conectar a personas que desean adoptar mascotas con refugios y animales que necesitan un hogar, mientras se facilita la gestión integral de refugios, el seguimiento de animales y la participación ciudadana.

---

## 🛠 Tecnologías

- **[NestJS](https://nestjs.com/)** 11 - Framework progresivo de Node.js
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado de JavaScript
- **[GraphQL](https://graphql.org/)** con Apollo Server - API flexible y eficiente
- **[REST API](https://restfulapi.net/)** - API RESTful tradicional
- **[TypeORM](https://typeorm.io/)** - ORM para TypeScript
- **[SQLite](https://www.sqlite.org/)** - Base de datos embebida
- **[Swagger](https://swagger.io/)** - Documentación interactiva REST
- **[class-validator](https://github.com/typestack/class-validator)** - Validación de datos

---

## 📦 Estructura del Proyecto

El proyecto está organizado en dos aplicaciones independientes:


Practica5/
├── rest/              # 🔵 API REST con Swagger
│   ├── src/
│   │   ├── usuario/          # ✅ CRUD completo
│   │   ├── animal/           # ✅ CRUD completo
│   │   ├── especie/          # ✅ CRUD completo
│   │   ├── refugio/          # ✅ CRUD completo
│   │   ├── publicacion/      # ✅ CRUD completo
│   │   ├── adopcion/         # ✅ CRUD completo
│   │   ├── campania/         # ✅ CRUD completo
│   │   ├── tipo-campania/    # ✅ CRUD completo
│   │   ├── voluntario/       # ✅ CRUD completo
│   │   └── seed/             # Datos de prueba
│   └── package.json
│
└── graphql/           # 🟣 API GraphQL con Apollo
    ├── src/
    │   ├── usuarios/         # ✅ Queries & Mutations
    │   ├── animales/         # ✅ Búsqueda avanzada
    │   ├── especie/          # ✅ Queries & Mutations
    │   ├── refugio/          # ✅ Queries & Mutations
    │   ├── publicacion/      # ✅ Con relaciones
    │   ├── adopcion/         # ✅ Queries & Mutations
    │   ├── campania/         # ✅ Queries & Mutations
    │   ├── voluntario/       # ✅ Queries & Mutations
    │   ├── analytics/        # ✅ Estadísticas avanzadas
    │   ├── common/           # Servicios compartidos
    │   └── schema.gql        # Schema generado
    └── package.json


---

## 🚀 Instalación y Uso

### REST API

bash
cd rest
npm install
npm run start:dev


*Documentación Swagger*: http://localhost:3000/api  
*Base URL*: http://localhost:3000

### GraphQL API

bash
cd graphql
npm install
npm run start:dev


*GraphQL Playground*: http://localhost:4000/graphql  
*Base URL*: http://localhost:4000

---

## ✨ Características Principales

### 🔵 REST API

- ✅ *9 módulos CRUD completos* con validación
- ✅ *Documentación Swagger* interactiva
- ✅ *45+ endpoints* RESTful
- ✅ *TypeORM* con SQLite
- ✅ *Data seeding* para pruebas
- ✅ *Arquitectura en 4 capas*: Entity → DTO → Service → Controller

*Endpoints principales:*
- GET/POST/PATCH/DELETE /usuario
- GET/POST/PATCH/DELETE /animal
- GET/POST/PATCH/DELETE /especie
- GET/POST/PATCH/DELETE /refugio
- GET/POST/PATCH/DELETE /publicacion
- GET/POST/PATCH/DELETE /adopcion
- GET/POST/PATCH/DELETE /campania
- GET/POST/PATCH/DELETE /tipo-campania
- GET/POST/PATCH/DELETE /voluntario

### 🟣 GraphQL API

- ✅ *Schema autogenerado* (schema.gql)
- ✅ *Queries y Mutations* para 8 módulos
- ✅ *Relaciones entre entidades* (ej: publicación → animal → especie)
- ✅ *Búsqueda avanzada de animales* con filtros, ordenamiento y paginación
- ✅ *Módulo Analytics* con estadísticas complejas:
  - 📊 Especies más adoptadas por periodo
  - 📈 Estadísticas de adopciones mensuales
  - 👥 Usuarios más activos
  - 🐾 Animales por especie
- ✅ *DataLoader pattern* para optimización de consultas

*Queries destacadas:*
graphql
# Búsqueda avanzada con paginación
buscarAnimalesAvanzado(filtros: {
  especieId: "uuid"
  estadoAdopcion: "disponible"
  busqueda: "labrador"
  limite: 10
  pagina: 1
})

# Estadísticas de adopciones
estadisticasAdopcionesMensuales(filtro: {
  mes: 10
  anio: 2025
})

# Especies más populares
especiesMasAdoptados(filtro: {
  mes: 10
  anio: 2025
  limite: 5
})


---

## 📊 Módulos Implementados (9/14)

| Módulo | REST | GraphQL | Analytics |
|--------|------|---------|-----------|
| *Usuario* | ✅ | ✅ | ✅ Más activos |
| *Animal* | ✅ | ✅ | ✅ Por especie |
| *Especie* | ✅ | ✅ | ✅ Más adoptadas |
| *Refugio* | ✅ | ✅ | - |
| *Publicación* | ✅ | ✅ | ✅ Relaciones |
| *Adopción* | ✅ | ✅ | ✅ Estadísticas |
| *Campaña* | ✅ | ✅ | - |
| *Tipo Campaña* | ✅ | - | - |
| *Voluntario* | ✅ | ✅ | - |

### ⏳ Pendientes (5/14)
- 🔴 Supervisor
- 🔴 Seguimiento
- 🔴 Causa Urgente
- 🔴 Donación
- 🔴 Pago (integración Stripe)

---

## 🔑 Diferencias entre REST y GraphQL

| Aspecto | REST | GraphQL |
|---------|------|---------|
| *Endpoints* | Múltiples URLs (/usuario, /animal, etc.) | Un solo endpoint (/graphql) |
| *Over-fetching* | Devuelve toda la entidad | Cliente pide solo lo que necesita |
| *Under-fetching* | Requiere múltiples requests | Una query puede traer datos relacionados |
| *Documentación* | Swagger UI | Schema + Playground |
| *Caché* | Más simple (HTTP) | Más complejo (Apollo Cache) |
| *Búsquedas complejas* | Múltiples endpoints | Una query con filtros |
| *Versionado* | /v1/, /v2/ | Evolución del schema |

---

## 🎯 Casos de Uso Recomendados

### Usar REST cuando:
- ✅ Necesitas operaciones CRUD simples
- ✅ Quieres aprovechar caché HTTP estándar
- ✅ El equipo está más familiarizado con REST
- ✅ Necesitas endpoints públicos simples

### Usar GraphQL cuando:
- ✅ Necesitas consultas flexibles y complejas
- ✅ Quieres evitar over/under-fetching
- ✅ Tienes relaciones profundas entre entidades
- ✅ Necesitas agregaciones y analytics
- ✅ Cliente móvil con conectividad limitada

---

## 🗄 Base de Datos

*TypeORM* con *SQLite* (ambas APIs comparten la misma BD)


tienda.sqlite  # Base de datos compartida


*14 entidades* mapeadas:
- Usuario, Animal, Especie, Refugio
- Publicación, Adopción
- Campaña, TipoCampaña, Voluntario
- Supervisor ⏳, Seguimiento ⏳
- CausaUrgente ⏳, Donación ⏳, Pago ⏳

---

## 📜 Scripts Disponibles

bash
# REST
cd rest
npm run start:dev      # Desarrollo con hot-reload
npm run build          # Compilar
npm run start:prod     # Producción
npm run seed           # Poblar BD con datos de prueba

# GraphQL
cd graphql
npm run start:dev      # Desarrollo
npm run build          # Compilar
npm run start:prod     # Producción

# Calidad de código (ambos)
npm run format         # Prettier
npm run lint           # ESLint
npm run test           # Jest tests
npm run test:e2e       # Tests E2E


---

## 📚 Documentación de APIs

### REST - Swagger UI

http://localhost:3000/api

- ✅ Documentación interactiva
- ✅ Probar endpoints directamente
- ✅ Ver schemas de DTOs
- ✅ Ejemplos de request/response

### GraphQL - Playground

http://localhost:4000/graphql

- ✅ Autocompletado de queries
- ✅ Documentación del schema
- ✅ Historial de queries
- ✅ Variables y headers

---

## 🧪 Datos de Prueba

El módulo seed/ (REST) incluye datos iniciales:
- 10 usuarios
- 5 especies (Perro, Gato, Conejo, Hamster, Ave)
- 3 refugios
- 20 animales
- 15 publicaciones
- 10 adopciones
- 5 campañas
- 3 tipos de campaña
- 8 voluntarios

bash
cd rest
npm run seed


---

## 🏆 Estado del Proyecto

*Implementación: 64%* (9/14 módulos)  
*Evaluación Académica: 22/24 puntos (EXCELENTE)*

### Completado:
- ✅ REST API completa con Swagger
- ✅ GraphQL API con Apollo Server
- ✅ Analytics avanzado
- ✅ Búsquedas complejas y paginación
- ✅ Relaciones entre entidades
- ✅ Validación de datos
- ✅ Base de datos compartida

### Pendiente:
- ⏳ 5 módulos restantes (Supervisor, Seguimiento, CausaUrgente, Donación, Pago)
- ⏳ Autenticación JWT
- ⏳ Tests unitarios y E2E completos
- ⏳ Integración con Stripe

---

## 👨‍💻 Información Académica

- *Asignatura*: Aplicación para el Servidor Web
- *Práctica*: Práctica 5 - REST vs GraphQL
- *Tecnologías*: NestJS 11, TypeORM, Apollo GraphQL, Swagger
- *Repositorio*: [Marcwos/practica5-servidorweb](https://github.com/Marcwos/practica5-servidorweb)

---

<div align="center">
  <p>Hecho con ❤ para los animales</p>
  <p>🐕 🐈 🐦 🐰 🐹</p>
  <br/>
  <p><em>Proyecto Académico - Ingeniería de Software</em></p>
  <p><strong>Estado: Activo | Implementación: 64%</strong></p>
</div>