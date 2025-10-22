import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateEspecieInput } from './create-especie.input';

/**
 * DTO para actualizar una especie. Extiende PartialType para que los
 * campos sean opcionales, pero requiere `id_especie` para identificar
 * la entidad a actualizar.
 */

@InputType()
export class UpdateEspecieInput extends PartialType(CreateEspecieInput) {
  /** Identificador de la especie a actualizar. */
  @Field(() => ID, { description: 'ID unico de la especie' })
  id_especie: string;
}
