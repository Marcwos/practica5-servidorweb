import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Refugio {
  @Field(() => ID, { description: 'ID del refugio (UUID)' })
  id_refugio: string;

  @Field(() => String, { description: 'Nombre del refugio' })
  nombre: string;

  @Field(() => String, { description: 'Teléfono del refugio' })
  telefono: string;

  @Field(() => String, { description: 'Descripción del refugio' })
  descripcion: string;
}
