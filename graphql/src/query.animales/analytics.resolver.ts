import { Resolver, Query, Args, ResolveField, Root } from '@nestjs/graphql';
import { AnalyticsService } from './analytics.service';
import { EspeciesMasAdoptadosType } from './dto/animales-mas-adoptados.type';
import { FiltroPeriodoInput } from './dto/filtro-periodo.input';
import { EstadisticasAdopcionesMensualesType, FiltroPeriodoInputType } from './dto/estadisticas-adopciones-mensuales.type';
import { EspecieType } from './dto/especie.type';

@Resolver()
export class AnalyticsResolver {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Query(() => [EspeciesMasAdoptadosType], { description: 'Especies más adoptadas en un periodo especificado' })
  async especiesMasAdoptados(@Args('filtro') filtro: FiltroPeriodoInput): Promise<EspeciesMasAdoptadosType[]> {
    return this.analyticsService.especiesMasAdoptados(filtro.mes, filtro.anio, filtro.limite);
  }

  @Query(() => [Object], { description: 'Devuelve animales filtrados por especie (id_especie)' })
  async animalesPorEspecie(@Args('especieId', { type: () => Number }) especieId: number) {
    return this.analyticsService.animalesPorEspecie(especieId);
  }

  @Query(() => EstadisticasAdopcionesMensualesType, { description: 'Estadísticas de adopciones para el mes y año indicados' })
  async estadisticasAdopcionesMensuales(@Args('filtro') filtro: FiltroPeriodoInputType) {
    return this.analyticsService.estadisticasAdopcionesMensuales(filtro.mes, filtro.anio);
  }

  @ResolveField(() => Object, { name: 'animal' })
  async resolveAnimal(@Root() publicacion: any) {
    if (!publicacion.id_animal) return null;
    const animales = await this.analyticsService.obtenerAnimales();
    return animales.find((a) => a.id === publicacion.id_animal || a.id_animal === publicacion.id_animal);
  }

  @ResolveField(() => EspecieType, { name: 'especie' })
  async resolveEspecie(@Root() animal: any) {
    if (!animal.id_especie) return null;
    const especies = await this.analyticsService.obtenerEspecies();
    return especies.find((e) => e.id === animal.id_especie || e.id_especie === animal.id_especie);
  }
}
