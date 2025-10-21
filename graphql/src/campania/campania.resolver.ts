import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CampaniaService } from './campania.service';
import { Campania } from './entities/campania.entity';
import { CreateCampaniaInput } from './dto/create-campania.input';
import { UpdateCampaniaInput } from './dto/update-campania.input';

@Resolver(() => Campania)
export class CampaniaResolver {
  constructor(private readonly campaniaService: CampaniaService) {}

  @Query(() => [Campania], { name: 'campanias' })
  findAll() {
    return this.campaniaService.findAll();
  }

  @Query(() => Campania, { name: 'campania' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.campaniaService.findOne(id);
  }

}
