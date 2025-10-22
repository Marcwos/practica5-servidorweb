import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { AnalyticsService } from './analytics.service';

import { FiltroPeriodoInput } from '../query.animales/dto/filtro-periodo.input';
import { AnimalesMasAdoptadosType } from '../query.animales/dto/animales-mas-adoptados.type';
import { EstadisticasAdopcionesMensualesType } from '../query.animales/dto/estadisticas-adopciones-mensuales.type';

/**
 * Resolver de Analytics: expone queries agregadas pensadas para dashboards.
 */
@Resolver()
export class AnalyticsResolver {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Query(() => [AnimalesMasAdoptadosType], { description: 'Top animales más adoptados en un mes específico' })
  async animalesMasAdoptados(@Args('filtro') filtro: FiltroPeriodoInput) {
    const { mes, anio, limite } = filtro;
    return this.analyticsService.animalesMasAdoptados(mes, anio, limite || 10);
  }

  @Query(() => [AnimalesMasAdoptadosType], { description: 'Lista de animales por especie' })
  async animalesPorEspecie(@Args('especieId') especieId: number) {
    return this.analyticsService.animalesPorEspecie(especieId);
  }

  @Query(() => EstadisticasAdopcionesMensualesType, { description: 'Estadísticas de adopciones para un mes' })
  async estadisticasAdopcionesMensuales(@Args('filtro') filtro: FiltroPeriodoInput) {
    const { mes, anio } = filtro;
    return this.analyticsService.estadisticasAdopcionesMensuales(mes, anio);
  }

  // Exemple of ResolveField if needed in the future to fetch relations lazily
  @ResolveField()
  async relacionDummy(@Parent() _parent: any) {
    return null;
  }
}
