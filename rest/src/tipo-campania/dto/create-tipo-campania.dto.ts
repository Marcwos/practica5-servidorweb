import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTipoCampaniaDto {
  @ApiProperty({ example: 'Esterilización' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'Campañas de esterilización masiva' })
  @IsString()
  descripcion: string;
}
