import { CreateAnimaleInput } from './create-animale.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAnimaleInput extends PartialType(CreateAnimaleInput) {
  @Field(() => Int)
  id: number;
}
