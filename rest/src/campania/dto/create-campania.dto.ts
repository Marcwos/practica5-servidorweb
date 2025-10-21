import { IsString, IsOptional, IsUUID, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCampaniaDto {
  @ApiPropertyOptional({ example: 'uuid-de-tipo-campania' })
  @IsOptional()
  @IsUUID()
  id_tipo_campania?: string;

  @ApiProperty({ example: 'Campaña de Esterilización 2025' })
  @IsString()
  titulo: string;

  @ApiProperty({ example: 'Campaña masiva de esterilización gratuita' })
  @IsString()
  descripcion: string;

  @ApiProperty({ example: '2025-10-20T10:00:00Z' })
  @IsDateString()
  fecha_inicio: Date;

  @ApiProperty({ example: '2025-10-22T18:00:00Z' })
  @IsDateString()
  fecha_fin: Date;

  @ApiProperty({ example: 'Parque Central' })
  @IsString()
  lugar: string;

  @ApiProperty({ example: 'Refugio Esperanza' })
  @IsString()
  organizador: string;

  @ApiProperty({ example: 'Activa' })
  @IsString()
  estado: string;
}
