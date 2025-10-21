import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Especie } from '../../especie/entities/especie.entity';
import { Refugio } from '../../refugio/entities/refugio.entity';

@Entity()
export class Animal {
  @ApiProperty({ description: 'ID único del animal' })
  @PrimaryGeneratedColumn('uuid')
  id_animal: string;

  @ApiProperty({ example: 'Max', description: 'Nombre del animal' })
  @Column()
  nombre: string;

  @ApiPropertyOptional({ description: 'ID de la especie' })
  @Column({ nullable: true })
  id_especie: string;

  @ManyToOne(() => Especie, { nullable: true })
  @JoinColumn({ name: 'id_especie' })
  especie: Especie;

  @ApiProperty({ example: '3 años', description: 'Edad del animal' })
  @Column()
  edad: string;

  @ApiProperty({
    example: 'Saludable',
    description: 'Estado de salud del animal',
  })
  @Column()
  estado: string;

  @ApiProperty({
    example: 'Perro amigable y juguetón',
    description: 'Descripción del animal',
  })
  @Column('text')
  descripcion: string;

  @ApiPropertyOptional({
    example: '["foto1.jpg", "foto2.jpg"]',
    description: 'URLs de fotos del animal',
  })
  @Column('text', { nullable: true })
  fotos: string;

  @ApiProperty({
    example: 'Disponible',
    description: 'Estado de adopción (Disponible, En proceso, Adoptado)',
  })
  @Column()
  estado_adopcion: string;

  @ApiPropertyOptional({ description: 'ID del refugio donde reside' })
  @Column({ nullable: true })
  id_refugio: string;

  @ManyToOne(() => Refugio, { nullable: true })
  @JoinColumn({ name: 'id_refugio' })
  refugio: Refugio;
}
