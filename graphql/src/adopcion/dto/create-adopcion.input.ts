import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAdopcionInput {
  @Field(() => String, { description: 'Estado de la adopción' })
  estado: string;

  @Field(() => String, { nullable: true, description: 'ID de la publicación relacionada' })
  id_publicacion?: string;

  @Field(() => String, { nullable: true, description: 'ID del usuario adoptante' })
  id_usuario?: string;
}
