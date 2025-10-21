import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AnimalesService } from './animales.service';
import { Animal } from './entities/animal.entity';
import { CreateAnimaleInput } from './dto/create-animale.input';
import { UpdateAnimaleInput } from './dto/update-animale.input';

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
}
