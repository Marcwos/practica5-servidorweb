import { IsString, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAnimalDto {
  @ApiProperty({ example: 'Max' })
  @IsString()
  nombre: string;

  @ApiPropertyOptional({ example: 'uuid-de-especie' })
  @IsOptional()
  @IsUUID()
  id_especie?: string;

  @ApiProperty({ example: '3 años' })
  @IsString()
  edad: string;

  @ApiProperty({ example: 'Saludable' })
  @IsString()
  estado: string;

  @ApiProperty({ example: 'Perro amigable y juguetón' })
  @IsString()
  descripcion: string;

  @ApiPropertyOptional({ example: '["foto1.jpg", "foto2.jpg"]' })
  @IsOptional()
  @IsString()
  fotos?: string;

  @ApiProperty({ example: 'Disponible' })
  @IsString()
  estado_adopcion: string;

  @ApiPropertyOptional({ example: 'uuid-de-refugio' })
  @IsOptional()
  @IsUUID()
  id_refugio?: string;
}
