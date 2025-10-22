import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateEspecieInput {
  @Field(() => ID, { description: 'ID unico de la especie', nullable: true })
  id_especie?: string;

  @Field(() => String, { description: 'Nombre de la especie' })
  nombre: string;
}
