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
import { PublicacionService } from './publicacion.service';
import { CreatePublicacionDto } from './dto/create-publicacion.dto';
import { UpdatePublicacionDto } from './dto/update-publicacion.dto';

@ApiTags('publicacion')
@Controller('publicacion')
export class PublicacionController {
  constructor(private readonly publicacionService: PublicacionService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una publicación' })
  @ApiResponse({
    status: 201,
    description: 'Publicación creada exitosamente.',
  })
  create(@Body() createPublicacionDto: CreatePublicacionDto) {
    return this.publicacionService.create(createPublicacionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las publicaciones' })
  findAll() {
    return this.publicacionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una publicación por ID' })
  findOne(@Param('id') id: string) {
    return this.publicacionService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una publicación' })
  update(
    @Param('id') id: string,
    @Body() updatePublicacionDto: UpdatePublicacionDto,
  ) {
    return this.publicacionService.update(id, updatePublicacionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una publicación' })
  remove(@Param('id') id: string) {
    return this.publicacionService.remove(id);
  }
}
