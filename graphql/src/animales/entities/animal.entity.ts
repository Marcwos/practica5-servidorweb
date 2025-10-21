import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Animal {
  @Field(() => ID, { description: 'ID unico de animales' })
  id_animal: string;

  @Field(()=> String, {description: 'Nombre del animal'})
  nombre: string;

  @Field(() => ID, { description: 'ID de la especie a la que pertenece' })
  id_especie: string;

  @Field(()=> String, {description: 'Edad'})
  edad: string;

  @Field(()=> String, {description: 'Estado del animal'})
  estado: string;

  @Field(()=> String, {description: 'Descripcion del animal'})
  descripcion: string;

  @Field(()=>[String], {description: 'Fotos del animal'})
  fotos: string [];

  @Field(()=>String, {description: 'Estado de adopcion del animal'})
  estado_adopcion: string;
  
  @Field(()=>ID, {description: 'ID del refugio acogedor'})
  id_refugio: string;
}
