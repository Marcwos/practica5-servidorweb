import { ObjectType, Field, Int, Float, ID } from '@nestjs/graphql';

@ObjectType()
export class EspeciesMasAdoptadosType {
  @Field(() => ID, { description: 'ID de la especie (se usa como identificador principal)' })
  animalId: string;

  @Field({ description: 'Nombre de la especie' })
  nombre: string;

  @Field(() => Int, { description: 'Total de adopciones de esta especie en el periodo' })
  vecesAdoptado: number;

  @Field(() => Int, { description: 'Número de publicaciones relacionadas con esta especie' })
  publicacionesRelacionadas: number;

  @Field(() => Float, { description: 'Porcentaje sobre el total de adopciones' })
  porcentajeSobreTotal: number;

  @Field(() => ID, { description: 'ID de la especie', nullable: true })
  especieId?: string;

  @Field({ description: 'Nombre de la especie', nullable: true })
  especieNombre?: string;

  @Field(() => Int, { description: 'Número de animales distintos adoptados de esta especie', nullable: true })
  animalesDistintosAdoptados?: number;
}
