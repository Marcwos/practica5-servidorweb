import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateEspecieInput } from './create-especie.input';


@InputType()
export class UpdateEspecieInput extends PartialType(CreateEspecieInput) {
  @Field(() => ID, { description: 'ID unico de la especie' })
  id_especie: string;
}
