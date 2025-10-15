import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Refugio {
  @ApiProperty({ description: 'ID único del refugio' })
  @PrimaryGeneratedColumn('uuid')
  id_refugio: string;

  @ApiProperty({ example: 'Refugio Esperanza Animal', description: 'Nombre del refugio' })
  @Column()
  nombre: string;

  @ApiProperty({ example: 'Av. Principal 123', description: 'Dirección del refugio' })
  @Column()
  direccion: string;

  @ApiProperty({ example: '555-9876', description: 'Teléfono de contacto' })
  @Column()
  telefono: string;

  @ApiProperty({ example: 'Refugio dedicado al cuidado de animales abandonados', description: 'Descripción del refugio' })
  @Column('text')
  descripcion: string;
}
