import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class FiltrosAnimalesInput {
  @Field({ nullable: true, description: 'ID de la especie para filtrar' })
  especieId?: string;

  @Field({ nullable: true, description: 'ID del refugio para filtrar' })
  refugioId?: string;

  @Field({ nullable: true, description: 'Estado de adopción (disponible, en_proceso, adoptado)' })
  estadoAdopcion?: string;

  @Field(() => Int, { nullable: true, description: 'Edad mínima del animal' })
  edadMin?: number;

  @Field(() => Int, { nullable: true, description: 'Edad máxima del animal' })
  edadMax?: number;

  @Field({ nullable: true, description: 'Texto de búsqueda (nombre o descripción)' })
  busqueda?: string;

  @Field({ nullable: true, description: 'Campo por el cual ordenar (nombre, edad, fecha_registro)', defaultValue: 'fecha_registro' })
  ordenarPor?: string;

  @Field({ nullable: true, description: 'Dirección del orden (ASC, DESC)', defaultValue: 'DESC' })
  orden?: string;

  @Field(() => Int, { nullable: true, description: 'Límite de resultados por página', defaultValue: 10 })
  limite?: number;

  @Field(() => Int, { nullable: true, description: 'Número de página', defaultValue: 1 })
  pagina?: number;
}
