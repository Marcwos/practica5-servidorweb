import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CampaniaService } from './campania.service';
import { CreateCampaniaDto } from './dto/create-campania.dto';
import { UpdateCampaniaDto } from './dto/update-campania.dto';

@ApiTags('campania')
@Controller('campania')
export class CampaniaController {
  constructor(private readonly campaniaService: CampaniaService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una campaña' })
  @ApiResponse({ status: 201, description: 'Campaña creada exitosamente.' })
  create(@Body() createCampaniaDto: CreateCampaniaDto) {
    return this.campaniaService.create(createCampaniaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las campañas' })
  findAll() {
    return this.campaniaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una campaña por ID' })
  findOne(@Param('id') id: string) {
    return this.campaniaService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una campaña' })
  update(@Param('id') id: string, @Body() updateCampaniaDto: UpdateCampaniaDto) {
    return this.campaniaService.update(id, updateCampaniaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una campaña' })
  remove(@Param('id') id: string) {
    return this.campaniaService.remove(id);
  }
}
