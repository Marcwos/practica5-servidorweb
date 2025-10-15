import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id_usuario: string;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @Column()
  contrasenia: string;

  @Column()
  telefono: string;

  @Column()
  direccion: string;

  @Column()
  fecha_registro: Date;
}
