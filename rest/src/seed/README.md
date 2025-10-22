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
  animalesPorEspecie(especieId: "5a01aedf-d847-44cc-bd2b-489eb2687a20") {
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
--FALTA Consultas de Análisis de Negocio

query 3:

#Estadisticas de adopciones Mensuales
{
  estadisticasAdopcionesMensuales(filtro: { mes: 6, anio: 2025 }) {
    totalAdopciones
    promedioAdopcionesDiarias
  }
}

--faltan 3 Consultas de Análisis de Negocio: