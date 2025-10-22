# Seed System - Base de Datos de Prueba

Este sistema de seed genera datos aleatorios pero realistas para probar las funcionalidades del sistema de adopción de animales.

## 📊 Datos que se generan

- **6 especies** básicas (Perro, Gato, Conejo, Hamster, Ave, Reptil)
- **4 refugios** con información completa
- **10 usuarios** con datos realistas
- **50 animales** distribuidos entre especies y refugios
- **~40 publicaciones** (80% de los animales)
- **80 adopciones** distribuidas en los últimos 12 meses

## 🎯 Optimizado para Analytics

El seed está diseñado específicamente para probar las queries de analytics:

- **Adopciones concentradas**: Más adopciones en meses específicos (Abril, Junio, Septiembre, Noviembre)
- **Distribución temporal**: Adopciones distribuidas en los últimos 12 meses
- **Relaciones completas**: Todas las entidades están interconectadas correctamente
- **Estados variados**: Diferentes estados de adopción y publicaciones para casos de prueba diversos

## 🚀 Cómo usar

### Opción 1: Desarrollo (TypeScript directo)
```bash
cd rest
npm run seed
```

### Opción 2: Producción (compilado)
```bash
cd rest
npm run seed:run
```

## 📈 Queries de prueba recomendadas

Una vez ejecutado el seed, puedes probar estas queries en GraphQL:

### 1. Animales más adoptados (Mayo 2025)
```graphql
{
  animalesMasAdoptados(filtro: { mes: 5, anio: 2025, limite: 5 }) {
    animalId
    nombre
    vecesAdoptado
    publicacionesRelacionadas
    porcentajeSobreTotal
  }
}
```

### 2. Animales por especie (Perros)
```graphql
{
  animalesPorEspecie(especieId: "ID_PERRO") {
    id_animal
    nombre
    edad
    estado_adopcion
  }
}
```

### 3. Estadísticas mensuales (Junio 2025)
```graphql
{
  estadisticasAdopcionesMensuales(filtro: { mes: 6, anio: 2025 }) {
    totalAdopciones
    numeroAdopciones
    promedioAdopcionesDiarias
    variacionPorcentual
  }
}
```

## 🔧 Personalización

Para modificar los datos generados, edita `src/seed/seed.service.ts`:

- Cambia nombres, cantidades o distribuciones
- Ajusta fechas de adopciones para diferentes periods de prueba
- Modifica estados y descripciones según tus necesidades

## ⚠️ Importante

- **El seed borra todos los datos existentes** antes de generar nuevos
- Los IDs son UUIDs generados automáticamente por TypeORM
- Las fechas de adopción están optimizadas para testing de analytics
- Los datos son ficticios pero realistas

## 🐛 Solución de problemas

Si encuentras errores:

1. Verifica que la base de datos SQLite esté accesible
2. Asegúrate de que todas las entidades estén sincronizadas
3. Revisa que no haya constraints de base de datos en conflicto

¡Disfruta probando tus queries con datos realistas! 🎉