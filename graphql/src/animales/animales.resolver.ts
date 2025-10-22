import { Resolver, Query, Mutation, Args, Int, ResolveField, Root } from '@nestjs/graphql';
import { AnimalesService } from './animales.service';
import { Animal } from './entities/animal.entity';
import { CreateAnimaleInput } from './dto/create-animale.input';
import { UpdateAnimaleInput } from './dto/update-animale.input';
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

  @ResolveField(() => Especie, { nullable: true })
  async especie(@Root() animal: Animal) {
    if (!animal.id_especie) return null;
    return this.animalesService.findEspecie(animal.id_especie);
  }
}
