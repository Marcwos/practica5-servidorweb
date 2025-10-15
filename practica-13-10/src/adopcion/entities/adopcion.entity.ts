import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Publicacion } from '../../publicacion/entities/publicacion.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity()
export class Adopcion {
  @ApiProperty({ description: 'ID único de la adopción' })
  @PrimaryGeneratedColumn('uuid')
  id_adopcion: string;

  @ApiProperty({ description: 'Fecha de la adopción' })
  @CreateDateColumn()
  fecha_adopcion: Date;

  @ApiProperty({ example: 'Aprobada', description: 'Estado de la adopción' })
  @Column()
  estado: string;

  @ApiPropertyOptional({ description: 'ID de la publicación relacionada' })
  @Column({ nullable: true })
  id_publicacion: string;

  @ManyToOne(() => Publicacion, { nullable: true })
  @JoinColumn({ name: 'id_publicacion' })
  publicacion: Publicacion;

  @ApiPropertyOptional({ description: 'ID del usuario adoptante' })
  @Column({ nullable: true })
  id_usuario: string;

  @ManyToOne(() => Usuario, { nullable: true })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;
}
