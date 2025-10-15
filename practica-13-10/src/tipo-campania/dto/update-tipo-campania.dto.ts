import { PartialType } from '@nestjs/swagger';
import { CreateTipoCampaniaDto } from './create-tipo-campania.dto';

export class UpdateTipoCampaniaDto extends PartialType(CreateTipoCampaniaDto) {}
