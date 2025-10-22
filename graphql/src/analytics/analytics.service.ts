import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { DataTransformerService } from '../common/data-transformer.service';

@Injectable()
export class AnalyticsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly dataTransformer: DataTransformerService
  ) {}

  async obtenerAdopciones() {
    const resp = await firstValueFrom(this.httpService.get('/adopcion'));
    return this.dataTransformer.transformAdopciones(resp.data);
  }

  async obtenerPublicaciones() {
    const resp = await firstValueFrom(this.httpService.get('/publicacion'));
    return this.dataTransformer.transformPublicaciones(resp.data);
  }

  async obtenerAnimales() {
    const resp = await firstValueFrom(this.httpService.get('/animal'));
    return resp.data;
  }

  async obtenerEspecies() {
    const resp = await firstValueFrom(this.httpService.get('/especie'));
    return resp.data;
  }

  async obtenerUsuarios() {
    const resp = await firstValueFrom(this.httpService.get('/usuario'));
    return this.dataTransformer.transformUsuarios(resp.data);
  }

  async obtenerVoluntarios() {
    const resp = await firstValueFrom(this.httpService.get('/voluntario'));
    return resp.data;
  }

  async especiesMasAdoptados(mes: number, anio: number, limite = 10) {
    const adopciones = await this.obtenerAdopciones();
    const publicaciones = await this.obtenerPublicaciones();
    const animales = await this.obtenerAnimales();
    const especies = await this.obtenerEspecies();
    
    const periodo = adopciones.filter((a) => {
      if (!a.fecha_adopcion) return false;
      const d = new Date(a.fecha_adopcion);
      return d.getMonth() + 1 === mes && d.getFullYear() === anio;
    });

    const mapaEspecies = new Map();

    for (const adopcion of periodo) {
      let animalId = adopcion.id_animal;
      
      if (!animalId && adopcion.id_publicacion) {
        const publicacion = publicaciones.find(p => p.id_publicacion === adopcion.id_publicacion);
        animalId = publicacion?.id_animal;
      }
      
      if (!animalId) continue;

      const animal = animales.find((a) => a.id_animal === animalId);
      if (!animal || !animal.id_especie) continue;

      const especie = especies.find((esp) => esp.id_especie === animal.id_especie);
      if (!especie) continue;

      const especieId = animal.id_especie;
      const entry = mapaEspecies.get(especieId) || {
        especieId: especieId,
        especieNombre: especie.nombre,
        vecesAdoptado: 0,
        animalesDistintos: new Set(),
        publicacionesRelacionadas: 0
      };

      entry.vecesAdoptado += 1;
      entry.animalesDistintos.add(animalId);
      
      mapaEspecies.set(especieId, entry);
    }

    for (const [especieId, entry] of mapaEspecies.entries()) {
      const animalesDeLaEspecie = animales.filter(a => a.id_especie === especieId);
      const animalesIds = animalesDeLaEspecie.map(a => a.id_animal);
      entry.publicacionesRelacionadas = publicaciones.filter(p => 
        animalesIds.includes(p.id_animal)
      ).length;
    }

    const total = periodo.length || 1;
    const resultados = Array.from(mapaEspecies.values())
      .map((r) => ({
        animalId: r.especieId, 
        nombre: r.especieNombre,
        vecesAdoptado: r.vecesAdoptado,
        publicacionesRelacionadas: r.publicacionesRelacionadas,
        porcentajeSobreTotal: (r.vecesAdoptado / total) * 100,
        especieId: r.especieId,
        especieNombre: r.especieNombre,
        animalesDistintosAdoptados: r.animalesDistintos.size
      }))
      .sort((a, b) => b.vecesAdoptado - a.vecesAdoptado)
      .slice(0, limite);

    console.log('Especies más adoptadas:', resultados);
    return resultados;
  }

  async animalesPorEspecie(especieId: string) {
    const animales = await this.obtenerAnimales();
    return animales.filter((a) => String(a.id_especie) === String(especieId));
  }

  async estadisticasAdopcionesMensuales(mes: number, anio: number) {
    const adopciones = await this.obtenerAdopciones();
    const periodo = adopciones.filter((a) => {
      if (!a.fecha_adopcion) return false;
      const d = new Date(a.fecha_adopcion);
      return d.getMonth() + 1 === mes && d.getFullYear() === anio;
    });

    const numeroAdopciones = periodo.length;
    const totalAdopciones = numeroAdopciones;
    const dias = new Date(anio, mes, 0).getDate();
    const promedio = totalAdopciones / dias;

    const mesAnterior = mes === 1 ? 12 : mes - 1;
    const anioAnterior = mes === 1 ? anio - 1 : anio;
    const anterior = adopciones.filter((a) => {
      if (!a.fecha_adopcion) return false;
      const d = new Date(a.fecha_adopcion);
      return d.getMonth() + 1 === mesAnterior && d.getFullYear() === anioAnterior;
    }).length;

    const variacion = anterior === 0 ? 100 : ((totalAdopciones - anterior) / anterior) * 100;
    return {
      totalAdopciones,
      numeroAdopciones,
      promedioAdopcionesDiarias: promedio,
      variacionPorcentual: variacion,
    };
  }

  async usuariosMasActivos(mes: number, anio: number, limite = 10) {
    const usuarios = await this.obtenerUsuarios();
    const adopciones = await this.obtenerAdopciones();
    const publicaciones = await this.obtenerPublicaciones();
    const voluntarios = await this.obtenerVoluntarios();

    // Filtrar por periodo si se especifica mes y año
    const adopcionesPeriodo = mes && anio 
      ? adopciones.filter((a) => {
          if (!a.fecha_adopcion) return false;
          const d = new Date(a.fecha_adopcion);
          return d.getMonth() + 1 === mes && d.getFullYear() === anio;
        })
      : adopciones;

    const publicacionesPeriodo = mes && anio
      ? publicaciones.filter((p) => {
          if (!p.fecha_subida) return false;
          const d = new Date(p.fecha_subida);
          return d.getMonth() + 1 === mes && d.getFullYear() === anio;
        })
      : publicaciones;

    // Mapear actividad por usuario
    const actividadUsuarios = new Map();

    for (const usuario of usuarios) {
      const usuarioId = usuario.id_usuario;
      
      // Contar adopciones
      const totalAdopciones = adopcionesPeriodo.filter(
        (a) => a.id_usuario === usuarioId
      ).length;

      // Contar publicaciones
      const totalPublicaciones = publicacionesPeriodo.filter(
        (p) => p.id_usuario === usuarioId
      ).length;

      // Contar participaciones como voluntario
      const totalVoluntariados = voluntarios.filter(
        (v) => v.id_usuario === usuarioId
      ).length;

      // Calcular puntuación ponderada
      // Adopciones: peso 3 (más importante)
      // Publicaciones: peso 2
      // Voluntariados: peso 1
      const puntuacionActividad = 
        (totalAdopciones * 3) + 
        (totalPublicaciones * 2) + 
        (totalVoluntariados * 1);

      // Solo incluir usuarios con actividad
      if (puntuacionActividad > 0) {
        actividadUsuarios.set(usuarioId, {
          usuarioId,
          nombreUsuario: usuario.nombre,
          email: usuario.email,
          totalAdopciones,
          totalPublicaciones,
          totalVoluntariados,
          puntuacionActividad,
          fechaRegistro: usuario.fecha_registro,
        });
      }
    }

    // Ordenar por puntuación y limitar
    const resultados = Array.from(actividadUsuarios.values())
      .sort((a, b) => b.puntuacionActividad - a.puntuacionActividad)
      .slice(0, limite);

    console.log('Usuarios más activos:', resultados);
    return resultados;
  }
}
