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
import { VoluntarioService } from './voluntario.service';
import { CreateVoluntarioDto } from './dto/create-voluntario.dto';
import { UpdateVoluntarioDto } from './dto/update-voluntario.dto';

@ApiTags('voluntario')
@Controller('voluntario')
export class VoluntarioController {
  constructor(private readonly voluntarioService: VoluntarioService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar voluntario' })
  create(@Body() createVoluntarioDto: CreateVoluntarioDto) {
    return this.voluntarioService.create(createVoluntarioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los voluntarios' })
  findAll() {
    return this.voluntarioService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un voluntario por ID' })
  findOne(@Param('id') id: string) {
    return this.voluntarioService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar voluntario' })
  update(
    @Param('id') id: string,
    @Body() updateVoluntarioDto: UpdateVoluntarioDto,
  ) {
    return this.voluntarioService.update(id, updateVoluntarioDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar voluntario' })
  remove(@Param('id') id: string) {
    return this.voluntarioService.remove(id);
  }
}
