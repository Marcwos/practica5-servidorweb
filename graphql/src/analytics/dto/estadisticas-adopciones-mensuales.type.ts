import { ObjectType, Field, Float, Int } from '@nestjs/graphql';
import { InputType, Field as InputField } from '@nestjs/graphql';

@ObjectType()
export class EstadisticasAdopcionesMensualesType {
  @Field(() => Int, { description: 'Total de adopciones en el periodo' })
  totalAdopciones: number;

  @Field(() => Int, { description: 'Número de adopciones' })
  numeroAdopciones: number;

  @Field(() => Float, { description: 'Promedio de adopciones por día' })
  promedioAdopcionesDiarias: number;

  @Field(() => Float, { description: 'Variación porcentual respecto al periodo anterior' })
  variacionPorcentual: number;
}

@InputType()
export class FiltroPeriodoInputType {
  @InputField(() => Int)
  mes: number;

  @InputField(() => Int)
  anio: number;
}
