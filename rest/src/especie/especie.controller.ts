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
import { EspecieService } from './especie.service';
import { CreateEspecieDto } from './dto/create-especie.dto';
import { UpdateEspecieDto } from './dto/update-especie.dto';

@ApiTags('especie')
@Controller('especie')
export class EspecieController {
  constructor(private readonly especieService: EspecieService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una especie' })
  @ApiResponse({ status: 201, description: 'Especie creada exitosamente.' })
  create(@Body() createEspecieDto: CreateEspecieDto) {
    return this.especieService.create(createEspecieDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las especies' })
  findAll() {
    return this.especieService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una especie por ID' })
  findOne(@Param('id') id: string) {
    return this.especieService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una especie' })
  update(@Param('id') id: string, @Body() updateEspecieDto: UpdateEspecieDto) {
    return this.especieService.update(id, updateEspecieDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una especie' })
  remove(@Param('id') id: string) {
    return this.especieService.remove(id);
  }
}
