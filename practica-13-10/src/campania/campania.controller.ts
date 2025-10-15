import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CampaniaService } from './campania.service';
import { CreateCampaniaDto } from './dto/create-campania.dto';
import { UpdateCampaniaDto } from './dto/update-campania.dto';

@Controller('campania')
export class CampaniaController {
  constructor(private readonly campaniaService: CampaniaService) {}

  @Post()
  create(@Body() createCampaniaDto: CreateCampaniaDto) {
    return this.campaniaService.create(createCampaniaDto);
  }

  @Get()
  findAll() {
    return this.campaniaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campaniaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCampaniaDto: UpdateCampaniaDto) {
    return this.campaniaService.update(+id, updateCampaniaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campaniaService.remove(+id);
  }
}
