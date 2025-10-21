import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './entities/usuario';

@Resolver(() => Usuario)
export class UsuariosResolver {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Query(() => [Usuario], { name: 'usuarios' })
  findAll() {
    return this.usuariosService.findAll();
  }

  @Query(() => Usuario, { name: 'usuario' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usuariosService.findOne(id);
  }
}
