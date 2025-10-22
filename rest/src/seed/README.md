querys jijijijiji
querys de unión:
--1
{
  animales {
    id_animal
    nombre
    especie {
      id_especie
      nombre
    }
  }
}

--2
{
  animalesPorEspecie(especieId: "1d6f30bb-4819-4842-85ab-1655eba9cad4") {
    nombre
    id_especie
    edad
    estado
    descripcion
  }
}

--3
{
  usuarios {
    id_usuario
    nombre
    email
    telefono
    fecha_registro
  }
  publicaciones {
    id_publicacion
    titulo
    descripcion
    fecha_subida
    estado
    id_usuario
    animal {
      id_animal
      nombre
      edad
      estado_adopcion
      especie {
        id_especie
        nombre
      }
    }
  }
}

INTEGRANTE 2:
query 1:
Especie mas adoptada
{
  especiesMasAdoptados(filtro: { mes: 5, anio: 2025, limite: 5 }) {
    nombre
    vecesAdoptado
    porcentajeSobreTotal
    especieNombre
  }
}

query 2:
{
  usuariosMasActivos(filtro: { mes: 6, anio: 2025, limite: 10 }) {
    usuarioId
    nombreUsuario
    email
    totalAdopciones
    totalPublicaciones
    totalVoluntariados
    puntuacionActividad
    fechaRegistro  # ← Ya funciona correctamente
  }
}

query 3:

#Estadisticas de adopciones Mensuales
{
  estadisticasAdopcionesMensuales(filtro: { mes: 6, anio: 2025 }) {
    totalAdopciones
    promedioAdopcionesDiarias
  }
}

Integrante 3:

query 1:

-Consultas de Búsqueda y Filtrado Avanzado
query {
  buscarAnimalesAvanzado(filtros: {
    especieId: "1d6f30bb-4819-4842-85ab-1655eba9cad4"
    estadoAdopcion: "disponible"
  }) {
    animales {
      id_animal
      nombre
      edad
      estado_adopcion
      especie {
        id_especie
        nombre
      }
    }
    metadata {
      totalResultados
    }
  }
}

query 2:

query {
  buscarAnimalesAvanzado(filtros: {
    edadMin: 0
    edadMax: 3
    ordenarPor: "edad"
    orden: "ASC"
  }) {
    animales {
      id_animal
      nombre
      edad
      estado_adopcion
    }
    metadata {
      totalResultados
    }
  }
}

query 3:

query {
  buscarAnimalesAvanzado(filtros: {
    busqueda: "tranquilo"
  }) {
    animales {
      id_animal
      nombre
      descripcion
    }
    metadata {
      totalResultados
    }
  }
}