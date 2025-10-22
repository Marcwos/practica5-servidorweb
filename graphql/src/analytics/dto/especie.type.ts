import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class EspecieType {
  @Field(() => ID)
  id_especie: string;

  @Field()
  nombre: string;
}
