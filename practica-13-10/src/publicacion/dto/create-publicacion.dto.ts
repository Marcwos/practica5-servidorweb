import { IsString, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePublicacionDto {
  @ApiProperty({ example: 'Perro en adopción' })
  @IsString()
  titulo: string;

  @ApiProperty({ example: 'Buscamos familia para Max' })
  @IsString()
  descripcion: string;

  @ApiProperty({ example: 'Activa' })
  @IsString()
  estado: string;

  @ApiPropertyOptional({ example: 'uuid-de-usuario' })
  @IsOptional()
  @IsUUID()
  id_usuario?: string;

  @ApiPropertyOptional({ example: 'uuid-de-animal' })
  @IsOptional()
  @IsUUID()
  id_animal?: string;
}
