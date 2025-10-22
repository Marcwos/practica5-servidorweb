import { InputType, Field, ID } from '@nestjs/graphql';

/**
 * DTO de entrada para crear una nueva especie.
 *
 * Se usa en mutaciones GraphQL que reciben los datos necesarios para
 * crear una especie en el backend REST.
 */
@InputType()
export class CreateEspecieInput {
  /** Identificador opcional. Normalmente es generado por el backend. */
  @Field(() => ID, { description: 'ID unico de la especie', nullable: true })
  id_especie?: string;

  /** Nombre legible de la especie. */
  @Field(() => String, { description: 'Nombre de la especie' })
  nombre: string;
}
