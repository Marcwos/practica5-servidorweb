import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AnalyticsService {
  constructor(private readonly httpService: HttpService) {}

  async obtenerAdopciones() {
    const resp = await firstValueFrom(this.httpService.get('/adopcion'));
    return resp.data;
  }

  async obtenerPublicaciones() {
    const resp = await firstValueFrom(this.httpService.get('/publicacion'));
    return resp.data;
  }

  async obtenerAnimales() {
    const resp = await firstValueFrom(this.httpService.get('/animal'));
    return resp.data;
  }

  async obtenerEspecies() {
    const resp = await firstValueFrom(this.httpService.get('/especie'));
    return resp.data;
  }

  async animalesMasAdoptados(mes: number, anio: number, limite = 10) {
    const adopciones = await this.obtenerAdopciones();
    const publicaciones = await this.obtenerPublicaciones();
    const periodo = adopciones.filter((a) => {
      if (!a.fecha_adopcion) return false;
      const d = new Date(a.fecha_adopcion);
      return d.getMonth() + 1 === mes && d.getFullYear() === anio;
    });

    const mapa = new Map();
    for (const a of periodo) {
      const id = a.id_animal || a.id_publicacion;
      const entry = mapa.get(id) || { animalId: id, nombre: '', veces: 0, pubs: 0 };
      entry.veces += 1;
      entry.pubs = publicaciones.filter((p) => p.id_animal === id).length;
      entry.nombre = publicaciones.find((p) => p.id_animal === id)?.titulo || 'Desconocido';
      mapa.set(id, entry);
    }

    const total = periodo.length || 1;
    return Array.from(mapa.values())
      .map((r) => ({
        animalId: r.animalId,
        nombre: r.nombre,
        vecesAdoptado: r.veces,
        publicacionesRelacionadas: r.pubs,
        porcentajeSobreTotal: (r.veces / total) * 100,
      }))
      .sort((a, b) => b.vecesAdoptado - a.vecesAdoptado)
      .slice(0, limite);
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
