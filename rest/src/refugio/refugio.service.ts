import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRefugioDto } from './dto/create-refugio.dto';
import { UpdateRefugioDto } from './dto/update-refugio.dto';
import { Refugio } from './entities/refugio.entity';

@Injectable()
export class RefugioService {
  constructor(
    @InjectRepository(Refugio)
    private readonly refugioRepository: Repository<Refugio>,
  ) {}

  async create(createRefugioDto: CreateRefugioDto) {
    const refugio = this.refugioRepository.create(createRefugioDto);
    return await this.refugioRepository.save(refugio);
  }

  async findAll() {
    return await this.refugioRepository.find();
  }

  async findOne(id: string) {
    const refugio = await this.refugioRepository.findOneBy({
      id_refugio: id,
    });
    if (!refugio) {
      throw new NotFoundException(`Refugio con id ${id} no encontrado`);
    }
    return refugio;
  }

  async update(id: string, updateRefugioDto: UpdateRefugioDto) {
    await this.findOne(id);
    await this.refugioRepository.update({ id_refugio: id }, updateRefugioDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.refugioRepository.delete({ id_refugio: id });
  }
}
