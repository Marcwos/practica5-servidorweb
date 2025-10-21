import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Adopcion {
  @Field(() => ID, { description: 'ID único de la adopción (UUID)' })
  id_adopcion: string;

  @Field(() => Date, { description: 'Fecha de la adopción' })
  fecha_adopcion: Date;

  @Field(() => String, { description: 'Estado de la adopción' })
  estado: string;

  @Field(() => ID, { nullable: true, description: 'ID de la publicación relacionada' })
  id_publicacion?: string;

  @Field(() => ID, { nullable: true, description: 'ID del usuario adoptante' })
  id_usuario?: string;
}
