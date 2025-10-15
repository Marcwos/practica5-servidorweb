import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Campania } from '../../campania/entities/campania.entity';

@Entity()
export class Voluntario {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id_voluntario: string;

  @ApiProperty({ example: 'Coordinador' })
  @Column()
  rol: string;

  @ApiProperty({ example: 'Activo' })
  @Column()
  estado: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  id_usuario: string;

  @ManyToOne(() => Usuario, { nullable: true })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  id_campania: string;

  @ManyToOne(() => Campania, { nullable: true })
  @JoinColumn({ name: 'id_campania' })
  campania: Campania;
}
