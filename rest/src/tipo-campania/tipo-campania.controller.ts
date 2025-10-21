import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TipoCampaniaService } from './tipo-campania.service';
import { CreateTipoCampaniaDto } from './dto/create-tipo-campania.dto';
import { UpdateTipoCampaniaDto } from './dto/update-tipo-campania.dto';

@ApiTags('tipo-campania')
@Controller('tipo-campania')
export class TipoCampaniaController {
  constructor(private readonly tipoCampaniaService: TipoCampaniaService) {}

  @Post()
  @ApiOperation({ summary: 'Crear tipo de campaña' })
  create(@Body() createTipoCampaniaDto: CreateTipoCampaniaDto) {
    return this.tipoCampaniaService.create(createTipoCampaniaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los tipos de campaña' })
  findAll() {
    return this.tipoCampaniaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un tipo de campaña por ID' })
  findOne(@Param('id') id: string) {
    return this.tipoCampaniaService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar tipo de campaña' })
  update(
    @Param('id') id: string,
    @Body() updateTipoCampaniaDto: UpdateTipoCampaniaDto,
  ) {
    return this.tipoCampaniaService.update(id, updateTipoCampaniaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar tipo de campaña' })
  remove(@Param('id') id: string) {
    return this.tipoCampaniaService.remove(id);
  }
}
