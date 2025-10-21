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
import { AdopcionService } from './adopcion.service';
import { CreateAdopcionDto } from './dto/create-adopcion.dto';
import { UpdateAdopcionDto } from './dto/update-adopcion.dto';

@ApiTags('adopcion')
@Controller('adopcion')
export class AdopcionController {
  constructor(private readonly adopcionService: AdopcionService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una adopción' })
  @ApiResponse({ status: 201, description: 'Adopción creada exitosamente.' })
  create(@Body() createAdopcionDto: CreateAdopcionDto) {
    return this.adopcionService.create(createAdopcionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las adopciones' })
  findAll() {
    return this.adopcionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una adopción por ID' })
  findOne(@Param('id') id: string) {
    return this.adopcionService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una adopción' })
  update(@Param('id') id: string, @Body() updateAdopcionDto: UpdateAdopcionDto) {
    return this.adopcionService.update(id, updateAdopcionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una adopción' })
  remove(@Param('id') id: string) {
    return this.adopcionService.remove(id);
  }
}
