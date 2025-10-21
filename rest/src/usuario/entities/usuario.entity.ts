import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Usuario {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @PrimaryGeneratedColumn('uuid')
  id_usuario: string;

  @ApiProperty({ example: 'Juan Perez' })
  @Column()
  nombre: string;

  @ApiProperty({ example: 'juan@example.com' })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ example: 'secret123' })
  @Column()
  contrasenia: string;

  @ApiProperty({ example: '555-1234' })
  @Column()
  telefono: string;

  @ApiProperty({ example: 'Calle Falsa 123' })
  @Column()
  direccion: string;

  @ApiProperty({ example: '2025-10-15T17:00:00.000Z' })
  @CreateDateColumn()
  fecha_registro: Date;
}
