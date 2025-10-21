import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class TipoCampania {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id_tipo_campania: string;

  @ApiProperty({ example: 'Esterilización' })
  @Column()
  nombre: string;

  @ApiProperty({ example: 'Campañas de esterilización masiva' })
  @Column('text')
  descripcion: string;
}
