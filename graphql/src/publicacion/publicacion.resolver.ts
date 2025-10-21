import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PublicacionService } from './publicacion.service';
import { Publicacion } from './entities/publicacion.entity';
import { CreatePublicacionInput } from './dto/create-publicacion.input';
import { UpdatePublicacionInput } from './dto/update-publicacion.input';

@Resolver(() => Publicacion)
export class PublicacionResolver {
  constructor(private readonly publicacionService: PublicacionService) {}

  @Query(() => [Publicacion], { name: 'publicaciones', description: 'Obtener todas las publicaciones' })
  findAll() {
    return this.publicacionService.findAll();
  }

  @Query(() => Publicacion, { name: 'publicacion', description: 'Obtener una publicación por ID' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.publicacionService.findOne(id);
  }

}
