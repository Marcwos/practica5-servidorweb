import { CreateCampaniaInput } from './create-campania.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCampaniaInput extends PartialType(CreateCampaniaInput) {
  @Field(() => Int)
  id: number;
}
