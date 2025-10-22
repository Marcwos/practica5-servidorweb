import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class FiltroPeriodoInput {
  @Field(() => Int, { description: 'Mes (1-12)' })
  mes: number;

  @Field(() => Int, { description: 'Año (YYYY)' })
  anio: number;

  @Field(() => Int, { nullable: true, description: 'Límite de resultados' })
  limite?: number;
}
