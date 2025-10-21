import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Usuario {
  @Field(() => ID, { description: 'ID único del usuario (UUID)' })
  id_usuario: string;

  @Field(() => String, { description: 'Nombre completo del usuario' })
  nombre: string;

  @Field(() => String, { description: 'Email único del usuario' })
  email: string;

  @Field(() => String, { description: 'Contraseña del usuario' })
  contrasenia: string;

  @Field(() => String, { description: 'Teléfono de contacto' })
  telefono: string;

  @Field(() => String, { description: 'Dirección del usuario' })
  direccion: string;

  @Field(() => Date, { description: 'Fecha de registro del usuario' })
  fecha_registro: Date;
}
  