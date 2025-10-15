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
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@ApiTags('animal')
@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un animal' })
  @ApiResponse({ status: 201, description: 'Animal creado exitosamente.' })
  create(@Body() createAnimalDto: CreateAnimalDto) {
    return this.animalService.create(createAnimalDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los animales' })
  findAll() {
    return this.animalService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un animal por ID' })
  findOne(@Param('id') id: string) {
    return this.animalService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un animal' })
  update(@Param('id') id: string, @Body() updateAnimalDto: UpdateAnimalDto) {
    return this.animalService.update(id, updateAnimalDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un animal' })
  remove(@Param('id') id: string) {
    return this.animalService.remove(id);
  }
}
