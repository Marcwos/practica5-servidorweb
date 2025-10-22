import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Publicacion {
  @Field(() => ID, { description: 'ID único de la publicación (UUID)' })
  id_publicacion: string;

  @Field(() => String, { description: 'Título de la publicación' })
  titulo: string;

  @Field(() => String, { description: 'Descripción detallada de la publicación' })
  descripcion: string;

  @Field(() => Date, { description: 'Fecha de subida de la publicación', nullable: true })
  fecha_subida?: Date;

  @Field(() => String, { description: 'Estado de la publicación' })
  estado: string;

  @Field(() => ID, { nullable: true, description: 'ID del usuario que creó la publicación' })
  id_usuario?: string;

  @Field(() => ID, { nullable: true, description: 'ID del animal en la publicación' })
  id_animal?: string;
}
