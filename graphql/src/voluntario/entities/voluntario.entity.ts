import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Voluntario {
  @Field(() => ID, { description: 'ID unico del voluntario' })
  id_voluntario: string;

  @Field(() => String, { description: 'Nombre completo del voluntario' })
  nombre: string;

  @Field(() => String, { description: 'Email de contacto' })
  email: string;
}
