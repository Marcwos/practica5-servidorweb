import { Resolver, Query, Args } from '@nestjs/graphql';
import { EspecieService } from './especie.service';
import { Especie } from './entities/especie.entity';

@Resolver(() => Especie)
export class EspecieResolver {
  constructor(private readonly especieService: EspecieService) {}

  @Query(() => [Especie], { name: 'especies', description: 'Obtener todas las especies' })
  findAll() {
    return this.especieService.findAll();
  }

  @Query(() => Especie, { name: 'especie', description: 'Obtener una especie por ID' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.especieService.findOne(id);
  }
}
