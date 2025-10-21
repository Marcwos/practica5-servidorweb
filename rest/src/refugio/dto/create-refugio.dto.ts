import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRefugioDto {
  @ApiProperty({ example: 'Refugio Esperanza Animal' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'Av. Principal 123' })
  @IsString()
  direccion: string;

  @ApiProperty({ example: '555-9876' })
  @IsString()
  telefono: string;

  @ApiProperty({ example: 'Refugio dedicado al cuidado de animales abandonados' })
  @IsString()
  descripcion: string;
}
