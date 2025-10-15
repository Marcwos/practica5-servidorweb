import { IsDate, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty({ example: 'Juan Perez' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'juan@example.com' })
  @IsString()
  email: string;

  @ApiProperty({ example: 'secret123' })
  @IsString()
  contrasenia: string;

  @ApiProperty({ example: '555-1234' })
  @IsString()
  telefono: string;

  @ApiProperty({ example: 'Calle Falsa 123' })
  @IsString()
  direccion: string;

  @ApiProperty({ type: String, example: '2025-10-15T00:00:00.000Z' })
  @IsDate()
  fecha_registro: Date;
}
