import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRefugioInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
