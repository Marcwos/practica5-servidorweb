import { ObjectType, Field, Int, ID, GraphQLISODateTime} from '@nestjs/graphql';

@ObjectType()
export class Campania {
  @Field(() => ID, { description: 'ID de la campaña' })
  id_campania: string;

  @Field(()=> ID, { description: 'ID de tipo campaña'})
  id_tipo_campia: string;

  @Field(()=>String, {description: "Titulo de la campaña"})
  titulo: string;

  @Field(()=> String, {description: 'Descripcion de la campaña'})
  descripcion: string;

  @Field(() => GraphQLISODateTime, { description: 'Fecha de inicio de la campaña' })
  fecha_inicio: Date;

  @Field(() => GraphQLISODateTime, { description: 'Fecha de fin de la campaña' })
  fecha_fin: Date;

  @Field(() => String, { description: 'Lugar donde se realiza la campaña' })
  lugar: string;

  @Field(() => String, { description: 'Organizador de la campaña' })
  organizador: string;

  @Field(() => String, { description: 'Estado actual de la campaña' })
  estado: string;

}
