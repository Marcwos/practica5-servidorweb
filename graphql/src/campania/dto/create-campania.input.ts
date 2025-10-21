import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCampaniaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
