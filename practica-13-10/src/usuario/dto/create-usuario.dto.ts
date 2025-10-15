import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty({ example: 'Juan Perez', description: 'Nombre completo del usuario' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'juan@example.com', description: 'Email único del usuario' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'secret123', description: 'Contraseña del usuario' })
  @IsString()
  contrasenia: string;

  @ApiProperty({ example: '555-1234', description: 'Teléfono de contacto' })
  @IsString()
  telefono: string;

  @ApiProperty({ example: 'Calle Falsa 123', description: 'Dirección del usuario' })
  @IsString()
  direccion: string;
}
