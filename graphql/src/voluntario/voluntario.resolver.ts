import { Resolver, Query, Args } from '@nestjs/graphql';
import { VoluntarioService } from './voluntario.service';
import { Voluntario } from './entities/voluntario.entity';

/**
 * Resolver GraphQL para Voluntario.
 */
@Resolver(() => Voluntario)
export class VoluntarioResolver {
  constructor(private readonly voluntarioService: VoluntarioService) {}

  @Query(() => [Voluntario], { name: 'voluntarios', description: 'Obtener todos los voluntarios' })
  findAll() {
    return this.voluntarioService.findAll();
  }

  @Query(() => Voluntario, { name: 'voluntario', description: 'Obtener un voluntario por ID' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.voluntarioService.findOne(id);
  }
}
