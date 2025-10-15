import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TipoCampania } from '../../tipo-campania/entities/tipo-campania.entity';

@Entity()
export class Campania {
  @ApiProperty({ description: 'ID único de la campaña' })
  @PrimaryGeneratedColumn('uuid')
  id_campania: string;

  @ApiPropertyOptional({ description: 'ID del tipo de campaña' })
  @Column({ nullable: true })
  id_tipo_campania: string;

  @ManyToOne(() => TipoCampania, { nullable: true })
  @JoinColumn({ name: 'id_tipo_campania' })
  tipo_campania: TipoCampania;

  @ApiProperty({ example: 'Campaña de Esterilización 2025' })
  @Column()
  titulo: string;

  @ApiProperty({ example: 'Campaña masiva de esterilización gratuita' })
  @Column('text')
  descripcion: string;

  @ApiProperty({ description: 'Fecha de inicio de la campaña' })
  @Column('datetime')
  fecha_inicio: Date;

  @ApiProperty({ description: 'Fecha de fin de la campaña' })
  @Column('datetime')
  fecha_fin: Date;

  @ApiProperty({ example: 'Parque Central' })
  @Column()
  lugar: string;

  @ApiProperty({ example: 'Refugio Esperanza' })
  @Column()
  organizador: string;

  @ApiProperty({ example: 'Activa' })
  @Column()
  estado: string;
}
