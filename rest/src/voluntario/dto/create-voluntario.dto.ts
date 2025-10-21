import { IsString, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateVoluntarioDto {
  @ApiProperty({ example: 'Coordinador' })
  @IsString()
  rol: string;

  @ApiProperty({ example: 'Activo' })
  @IsString()
  estado: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  id_usuario?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  id_campania?: string;
}
