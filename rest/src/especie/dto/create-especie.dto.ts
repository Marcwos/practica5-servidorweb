import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEspecieDto {
  @ApiProperty({ example: 'Perro', description: 'Nombre de la especie' })
  @IsString()
  nombre: string;
}
