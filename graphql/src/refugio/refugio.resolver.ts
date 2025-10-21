import { Resolver, Query, Args } from '@nestjs/graphql';
import { RefugioService } from './refugio.service';
import { Refugio } from './entities/refugio.entity';

@Resolver(() => Refugio)
export class RefugioResolver {
  constructor(private readonly refugioService: RefugioService) {}
  
  @Query(() => [Refugio], { name: 'refugios', description: 'Obtener todos los refugios' })
  findAll() {
    return this.refugioService.findAll();
  }

  @Query(() => Refugio, { name: 'refugio', description: 'Obtener un refugio por ID' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.refugioService.findOne(id);
  }
}
