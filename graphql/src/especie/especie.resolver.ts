import { Resolver, Query, Args } from '@nestjs/graphql';
import { EspecieService } from './especie.service';
import { Especie } from './entities/especie.entity';

/**
 * Resolver GraphQL para Especie.
 *
 * Expone las queries `especies` y `especie` que delegan en
 * `EspecieService` para obtener los datos desde el backend REST.
 */
@Resolver(() => Especie)
export class EspecieResolver {
  constructor(private readonly especieService: EspecieService) {}

  /**
   * Obtiene todas las especies disponibles.
   * @returns Lista de especies obtenidas desde el servicio REST.
   */
  @Query(() => [Especie], { name: 'especies', description: 'Obtener todas las especies' })
  findAll() {
    return this.especieService.findAll();
  }

  /**
   * Obtiene una especie por su ID.
   * @param id Identificador de la especie (string).
   * @returns La especie encontrada o null/undefined si no existe.
   */
  @Query(() => Especie, { name: 'especie', description: 'Obtener una especie por ID' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.especieService.findOne(id);
  }
}
