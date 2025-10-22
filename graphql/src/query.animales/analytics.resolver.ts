import { Resolver, Query, Args, ResolveField, Root } from '@nestjs/graphql';
import { AnalyticsService } from './analytics.service';
import { AnimalesMasAdoptadosType } from './dto/animales-mas-adoptados.type';
import { FiltroPeriodoInput } from './dto/filtro-periodo.input';
import { EstadisticasAdopcionesMensualesType, FiltroPeriodoInputType } from './dto/estadisticas-adopciones-mensuales.type';
import { EspecieType } from './dto/especie.type';
import { Animal } from 'src/animales/entities/animal.entity';
import { Publicacion } from 'src/publicacion/entities/publicacion.entity';

@Resolver(() => Publicacion)
export class AnalyticsResolver {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Query(() => [AnimalesMasAdoptadosType], { description: 'Animales más adoptados en un periodo especificado' })
  async animalesMasAdoptados(@Args('filtro') filtro: FiltroPeriodoInput): Promise<AnimalesMasAdoptadosType[]> {
    return this.analyticsService.animalesMasAdoptados(filtro.mes, filtro.anio, filtro.limite);
  }

  @Query(() => [Animal], { description: 'Devuelve animales filtrados por especie (id_especie)' })
  async animalesPorEspecie(@Args('especieId', { type: () => String }) especieId: string) {
    return this.analyticsService.animalesPorEspecie(especieId);
  }

  @Query(() => EstadisticasAdopcionesMensualesType, { description: 'Estadísticas de adopciones para el mes y año indicados' })
  async estadisticasAdopcionesMensuales(@Args('filtro') filtro: FiltroPeriodoInputType) {
    return this.analyticsService.estadisticasAdopcionesMensuales(filtro.mes, filtro.anio);
  }

  @ResolveField(() => Animal, { name: 'animal' })
  async resolveAnimal(@Root() publicacion: Publicacion) {
    if (!publicacion.id_animal) return null;
    const animales = await this.analyticsService.obtenerAnimales();
    return animales.find((a) => a.id_animal === publicacion.id_animal);
  }

  @ResolveField(() => EspecieType, { name: 'especie' })
  async resolveEspecie(@Root() animal: any) {
    if (!animal.id_especie) return null;
    const especies = await this.analyticsService.obtenerEspecies();
    return especies.find((e) => e.id_especie === animal.id_especie);
  }
}
