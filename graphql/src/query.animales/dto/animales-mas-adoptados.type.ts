import { ObjectType, Field, Int, Float, ID } from '@nestjs/graphql';

@ObjectType()
export class AnimalesMasAdoptadosType {
  @Field(() => ID, { description: 'ID del animal' })
  animalId: string;

  @Field({ description: 'Nombre del animal' })
  nombre: string;

  @Field(() => Int, { description: 'Veces que fue adoptado en el periodo' })
  vecesAdoptado: number;

  @Field(() => Int, { description: 'Número de publicaciones relacionadas' })
  publicacionesRelacionadas: number;

  @Field(() => Float, { description: 'Porcentaje sobre el total de adopciones' })
  porcentajeSobreTotal: number;
}
