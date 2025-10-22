import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Usuario {
  @Field(() => ID, { description: 'ID único del usuario (UUID)' })
  id_usuario: string;

  @Field(() => String, { description: 'Nombre completo del usuario' })
  nombre: string;

  @Field(() => String, { description: 'Email único del usuario' })
  email: string;

  @Field(() => String, { description: 'Contraseña del usuario', nullable: true })
  contrasenia?: string;

  @Field(() => String, { description: 'Teléfono de contacto', nullable: true })
  telefono?: string;

  @Field(() => String, { description: 'Dirección del usuario', nullable: true })
  direccion?: string;

  @Field(() => Date, { description: 'Fecha de registro del usuario', nullable: true })
  fecha_registro?: Date;
}
  