import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AdopcionService } from './adopcion.service';
import { Adopcion } from './entities/adopcion.entity';
import { CreateAdopcionInput } from './dto/create-adopcion.input';
import { UpdateAdopcionInput } from './dto/update-adopcion.input';

@Resolver(() => Adopcion)
export class AdopcionResolver {
  constructor(private readonly adopcionService: AdopcionService) {}

  @Query(() => [Adopcion], { name: 'adopciones', description: 'Obtener todas las adopciones' })
  findAll() {
    return this.adopcionService.findAll();
  }

  @Query(() => Adopcion, { name: 'adopcion', description: 'Obtener una adopción por ID' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.adopcionService.findOne(id);
  }

}
