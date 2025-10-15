import { IsString, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAdopcionDto {
  @ApiProperty({ example: 'Aprobada' })
  @IsString()
  estado: string;

  @ApiPropertyOptional({ example: 'uuid-de-publicacion' })
  @IsOptional()
  @IsUUID()
  id_publicacion?: string;

  @ApiPropertyOptional({ example: 'uuid-de-usuario' })
  @IsOptional()
  @IsUUID()
  id_usuario?: string;
}
