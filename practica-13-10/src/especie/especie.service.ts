import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEspecieDto } from './dto/create-especie.dto';
import { UpdateEspecieDto } from './dto/update-especie.dto';
import { Especie } from './entities/especie.entity';

@Injectable()
export class EspecieService {
  constructor(
    @InjectRepository(Especie)
    private readonly especieRepository: Repository<Especie>,
  ) {}

  async create(createEspecieDto: CreateEspecieDto) {
    const especie = this.especieRepository.create(createEspecieDto);
    return await this.especieRepository.save(especie);
  }

  async findAll() {
    return await this.especieRepository.find();
  }

  async findOne(id: string) {
    const especie = await this.especieRepository.findOneBy({
      id_especie: id,
    });
    if (!especie) {
      throw new NotFoundException(`Especie con id ${id} no encontrada`);
    }
    return especie;
  }

  async update(id: string, updateEspecieDto: UpdateEspecieDto) {
    await this.findOne(id);
    await this.especieRepository.update({ id_especie: id }, updateEspecieDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.especieRepository.delete({ id_especie: id });
  }
}
