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
import { RefugioService } from './refugio.service';
import { CreateRefugioDto } from './dto/create-refugio.dto';
import { UpdateRefugioDto } from './dto/update-refugio.dto';

@ApiTags('refugio')
@Controller('refugio')
export class RefugioController {
  constructor(private readonly refugioService: RefugioService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un refugio' })
  @ApiResponse({ status: 201, description: 'Refugio creado exitosamente.' })
  create(@Body() createRefugioDto: CreateRefugioDto) {
    return this.refugioService.create(createRefugioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los refugios' })
  findAll() {
    return this.refugioService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un refugio por ID' })
  findOne(@Param('id') id: string) {
    return this.refugioService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un refugio' })
  update(@Param('id') id: string, @Body() updateRefugioDto: UpdateRefugioDto) {
    return this.refugioService.update(id, updateRefugioDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un refugio' })
  remove(@Param('id') id: string) {
    return this.refugioService.remove(id);
  }
}
