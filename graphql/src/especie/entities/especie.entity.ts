// Entidad especie para GraphQl
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Especie {
  @Field(() => ID, { description: 'ID unico de la especie' })
  id_especie: string;

  @Field(() => String, { description: 'Nombre de la especie' })
  nombre: string;
}
