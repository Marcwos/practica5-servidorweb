import { CreateAnimaleInput } from './create-animale.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

/**
 * DTO para actualizar un animal. Extiende PartialType para hacer
 * los campos opcionales. Se requiere el campo `id` para identificar
 * el animal a actualizar.
 */

@InputType()
export class UpdateAnimaleInput extends PartialType(CreateAnimaleInput) {
  /** Identificador numérico del animal. */
  @Field(() => Int)
  id: number;
}
