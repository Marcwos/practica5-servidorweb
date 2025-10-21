# 🐾 Love4Pets - API REST + GraphQL Gateway

Plataforma integral para la **adopción, cuidado y protección de animales**, ahora con un **Gateway GraphQL** que consume la API REST desarrollada en el Taller 4.

---

## 📘 Descripción General

El proyecto **Love4Pets** combina dos capas principales:

| Capa | Descripción | Puerto |
|------|--------------|--------|
| 🧩 **API REST** | Backend principal desarrollado con **NestJS**, **TypeORM** y **SQLite** | `3000` |
| ⚡ **GraphQL Gateway** | Capa de abstracción que consume la API REST mediante `HttpModule` | `3001` |

Arquitectura general:

```
Cliente → GraphQL Gateway → API REST (NestJS) → SQLite
```

---

## 🧱 Arquitectura Técnica

### Tecnologías
- **NestJS 11** (REST + GraphQL)
- **TypeScript**
- **TypeORM + SQLite**
- **Apollo Server**
- **Axios / HttpModule**
- **Swagger (REST)**
- **Apollo Playground (GraphQL)**

---

## ⚙️ Instalación

### 1️⃣ Clonar ambos proyectos
```bash
# Proyecto REST
git clone https://github.com/tu-usuario/love4pets.git
cd love4pets
npm install

# Proyecto GraphQL Gateway
nest new love4pets-graphql
cd love4pets-graphql
npm install @nestjs/graphql @nestjs/apollo @apollo/server graphql
npm install @nestjs/axios axios rxjs
```

---

## 🚀 Ejecución

### Paso 1 - Inicia la API REST
```bash
npm run start:dev
```
📍 Disponible en: `http://localhost:3000/api`

### Paso 2 - Inicia el Gateway GraphQL
```bash
npm run start:dev
```
📍 Disponible en: `http://localhost:3001/graphql`

---

## 🧩 Consultas GraphQL Ejemplo

### 1️⃣ Animales por Refugio
```graphql
query {
  animalesPorRefugio {
    refugio { nombre }
    totalAnimales
    disponibles
    adoptados
  }
}
```

### 2️⃣ Estadísticas de Adopciones
```graphql
query {
  estadisticasAdopciones(anio: 2025) {
    mes
    totalAdopciones
    porcentajeCompletadas
  }
}
```

### 3️⃣ Búsqueda Avanzada de Animales
```graphql
query {
  buscarAnimales(filtros: {
    especie: "Gato",
    estadoAdopcion: "disponible"
  }) {
    nombre
    edad
    refugio { nombre }
  }
}
```

---

## 📄 Documentación

- **Swagger REST:** [http://localhost:3000/api](http://localhost:3000/api)
- **GraphQL Playground:** [http://localhost:3001/graphql](http://localhost:3001/graphql)

---

## 🧑‍🤝‍🧑 División del Trabajo

| Integrante | Tipo de Query | Descripción |
|-------------|----------------|--------------|
| 1 | Información Agregada | Dashboard de animales, publicaciones y refugios |
| 2 | Análisis de Negocio | Estadísticas de adopciones, top refugios |
| 3 | Búsqueda Avanzada | Filtros por especie, usuario y campañas |

---

## 📅 Planificación

| Fecha | Tarea | Responsable |
|--------|--------|--------------|
| Día 1 | Creación del proyecto y módulo GraphQL | Todos |
| Día 2 | Servicios HTTP y Types GraphQL | Integrante 1 |
| Día 3 | Resolvers y pruebas en Playground | Integrante 2 |
| Día 4 | Documentación y presentación | Integrante 3 |

---

## 🧾 Autores

Proyecto académico del **Taller 5 - Aplicación para el Servidor Web**  
Desarrollado con ❤️ por estudiantes de Ingeniería en Software.
