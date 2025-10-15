import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCampaniaDto } from './dto/create-campania.dto';
import { UpdateCampaniaDto } from './dto/update-campania.dto';
import { Campania } from './entities/campania.entity';

@Injectable()
export class CampaniaService {
  constructor(
    @InjectRepository(Campania)
    private readonly campaniaRepository: Repository<Campania>,
  ) {}

  async create(createCampaniaDto: CreateCampaniaDto) {
    const campania = this.campaniaRepository.create(createCampaniaDto);
    return await this.campaniaRepository.save(campania);
  }

  async findAll() {
    return await this.campaniaRepository.find({
      relations: ['tipo_campania'],
    });
  }

  async findOne(id: string) {
    const campania = await this.campaniaRepository.findOne({
      where: { id_campania: id },
      relations: ['tipo_campania'],
    });
    if (!campania) {
      throw new NotFoundException(`Campaña con id ${id} no encontrada`);
    }
    return campania;
  }

  async update(id: string, updateCampaniaDto: UpdateCampaniaDto) {
    await this.findOne(id);
    await this.campaniaRepository.update(
      { id_campania: id },
      updateCampaniaDto,
    );
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.campaniaRepository.delete({ id_campania: id });
  }
}
