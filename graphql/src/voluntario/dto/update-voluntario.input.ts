import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateVoluntarioInput } from './create-voluntario.input';

@InputType()
export class UpdateVoluntarioInput extends PartialType(CreateVoluntarioInput) {
  @Field(() => ID, { description: 'ID unico del voluntario' })
  id_voluntario: string;
}
