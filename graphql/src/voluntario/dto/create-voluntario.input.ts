import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateVoluntarioInput {
  @Field(() => ID, { description: 'ID unico del voluntario', nullable: true })
  id_voluntario?: string;

  @Field(() => String, { description: 'Nombre completo del voluntario' })
  nombre: string;

  @Field(() => String, { description: 'Email de contacto' })
  email: string;
}
