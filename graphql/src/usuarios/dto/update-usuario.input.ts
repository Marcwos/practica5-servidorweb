import { UsuarioInput } from './usuario.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUsuarioInput extends PartialType(UsuarioInput) {
  @Field(() => Int)
  id: number;
}
