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

    // Mapa para agrupar por ESPECIE (no por animal individual)
    const mapaEspecies = new Map();

    for (const adopcion of periodo) {
      // Obtener el animal desde la adopción
      let animalId = adopcion.id_animal;
      
      // Si no está en adopción, buscar en publicación
      if (!animalId && adopcion.id_publicacion) {
        const publicacion = publicaciones.find(p => p.id_publicacion === adopcion.id_publicacion);
        animalId = publicacion?.id_animal;
      }
      
      if (!animalId) continue;

      // Buscar información del animal
      const animal = animales.find((a) => a.id_animal === animalId);
      if (!animal || !animal.id_especie) continue;

      // Buscar información de la especie
      const especie = especies.find((esp) => esp.id_especie === animal.id_especie);
      if (!especie) continue;

      // Agrupar por ID de especie
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

    // Calcular publicaciones relacionadas para cada especie
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
        animalId: r.especieId, // Usando especieId como identificador principal
        nombre: r.especieNombre, // Nombre de la especie
        vecesAdoptado: r.vecesAdoptado,
        publicacionesRelacionadas: r.publicacionesRelacionadas,
        porcentajeSobreTotal: (r.vecesAdoptado / total) * 100,
        especieId: r.especieId,
        especieNombre: r.especieNombre,
        // Información adicional útil
        animalesDistintosAdoptados: r.animalesDistintos.size
      }))
      .sort((a, b) => b.vecesAdoptado - a.vecesAdoptado)
      .slice(0, limite);

    console.log('📊 Especies más adoptadas:', resultados);
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
}
