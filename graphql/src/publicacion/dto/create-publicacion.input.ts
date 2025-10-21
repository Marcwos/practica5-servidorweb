import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePublicacionInput {
  @Field(() => String, { description: 'Título de la publicación' })
  titulo: string;

  @Field(() => String, { description: 'Descripción detallada de la publicación' })
  descripcion: string;

  @Field(() => String, { description: 'Estado de la publicación' })
  estado: string;

  @Field(() => String, { nullable: true, description: 'ID del usuario que crea la publicación' })
  id_usuario?: string;

  @Field(() => String, { nullable: true, description: 'ID del animal en la publicación' })
  id_animal?: string;
}
