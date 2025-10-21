import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Animal } from '../../animal/entities/animal.entity';

@Entity()
export class Publicacion {
  @ApiProperty({ description: 'ID único de la publicación' })
  @PrimaryGeneratedColumn('uuid')
  id_publicacion: string;

  @ApiProperty({ example: 'Perro en adopción', description: 'Título de la publicación' })
  @Column()
  titulo: string;

  @ApiProperty({ example: 'Buscamos familia para Max', description: 'Descripción detallada' })
  @Column('text')
  descripcion: string;

  @ApiProperty({ description: 'Fecha de subida de la publicación' })
  @CreateDateColumn()
  fecha_subida: Date;

  @ApiProperty({ example: 'Activa', description: 'Estado de la publicación' })
  @Column()
  estado: string;

  @ApiPropertyOptional({ description: 'ID del usuario que creó la publicación' })
  @Column({ nullable: true })
  id_usuario: string;

  @ManyToOne(() => Usuario, { nullable: true })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @ApiPropertyOptional({ description: 'ID del animal en la publicación' })
  @Column({ nullable: true })
  id_animal: string;

  @ManyToOne(() => Animal, { nullable: true })
  @JoinColumn({ name: 'id_animal' })
  animal: Animal;
}
