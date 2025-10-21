import { CreateRefugioInput } from './create-refugio.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRefugioInput extends PartialType(CreateRefugioInput) {
  @Field(() => Int)
  id: number;
}
