import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Especie {
  @ApiProperty({ description: 'ID único de la especie' })
  @PrimaryGeneratedColumn('uuid')
  id_especie: string;

  @ApiProperty({ example: 'Perro', description: 'Nombre de la especie' })
  @Column({ unique: true })
  nombre: string;
}
