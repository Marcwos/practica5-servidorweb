import { Resolver, Query, Mutation, Args, Int, ResolveField, Root } from '@nestjs/graphql';
import { AnimalesService } from './animales.service';
import { Animal } from './entities/animal.entity';
import { CreateAnimaleInput } from './dto/create-animale.input';
import { UpdateAnimaleInput } from './dto/update-animale.input';
import { FiltrosAnimalesInput } from './dto/filtros-animales.input';
import { ResultadoBusquedaAnimalesType } from './dto/resultado-busqueda-animales.type';
import { Especie } from '../especie/entities/especie.entity';

@Resolver(() => Animal)
export class AnimalesResolver {
  constructor(private readonly animalesService: AnimalesService) {}

  @Query(() => [Animal], { name: 'animales' })
  findAll() {
    return this.animalesService.findAll();
  }

  @Query(() => Animal, { name: 'animal' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.animalesService.findOne(id);
  }

  @Query(() => ResultadoBusquedaAnimalesType, { 
    name: 'buscarAnimalesAvanzado',
    description: 'Búsqueda avanzada de animales con filtros múltiples, ordenamiento y paginación'
  })
  buscarAnimalesAvanzado(@Args('filtros') filtros: FiltrosAnimalesInput) {
    return this.animalesService.buscarAnimalesAvanzado(filtros);
  }

  @ResolveField(() => Especie, { nullable: true })
  async especie(@Root() animal: Animal) {
    if (!animal.id_especie) return null;
    return this.animalesService.findEspecie(animal.id_especie);
  }
}
