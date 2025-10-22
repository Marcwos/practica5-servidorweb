import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Animal } from '../entities/animal.entity';

@ObjectType()
export class MetadataPaginacion {
  @Field(() => Int, { description: 'Total de resultados encontrados' })
  totalResultados: number;

  @Field(() => Int, { description: 'Página actual' })
  paginaActual: number;

  @Field(() => Int, { description: 'Total de páginas' })
  totalPaginas: number;

  @Field(() => Int, { description: 'Resultados por página' })
  resultadosPorPagina: number;

  @Field({ description: 'Indica si hay una página anterior' })
  hayPaginaAnterior: boolean;

  @Field({ description: 'Indica si hay una página siguiente' })
  hayPaginaSiguiente: boolean;
}

@ObjectType()
export class ResultadoBusquedaAnimalesType {
  @Field(() => [Animal], { description: 'Lista de animales encontrados' })
  animales: Animal[];

  @Field(() => MetadataPaginacion, { description: 'Información de paginación' })
  metadata: MetadataPaginacion;
}
