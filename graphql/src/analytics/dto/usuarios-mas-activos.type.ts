import { ObjectType, Field, Int, Float, ID } from '@nestjs/graphql';

@ObjectType()
export class UsuariosMasActivosType {
  @Field(() => ID, { description: 'ID del usuario' })
  usuarioId: string;

  @Field(() => String, { description: 'Nombre completo del usuario' })
  nombreUsuario: string;

  @Field(() => String, { description: 'Email del usuario' })
  email: string;

  @Field(() => Int, { description: 'Total de adopciones realizadas' })
  totalAdopciones: number;

  @Field(() => Int, { description: 'Total de publicaciones creadas' })
  totalPublicaciones: number;

  @Field(() => Int, { description: 'Total de participaciones como voluntario' })
  totalVoluntariados: number;

  @Field(() => Float, { description: 'Puntuación de actividad (suma ponderada)' })
  puntuacionActividad: number;

  @Field(() => Date, { nullable: true, description: 'Fecha de registro del usuario' })
  fechaRegistro?: Date;
}
