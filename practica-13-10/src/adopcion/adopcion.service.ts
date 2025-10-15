import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdopcionDto } from './dto/create-adopcion.dto';
import { UpdateAdopcionDto } from './dto/update-adopcion.dto';
import { Adopcion } from './entities/adopcion.entity';

@Injectable()
export class AdopcionService {
  constructor(
    @InjectRepository(Adopcion)
    private readonly adopcionRepository: Repository<Adopcion>,
  ) {}

  async create(createAdopcionDto: CreateAdopcionDto) {
    const adopcion = this.adopcionRepository.create(createAdopcionDto);
    return await this.adopcionRepository.save(adopcion);
  }

  async findAll() {
    return await this.adopcionRepository.find({
      relations: ['publicacion', 'usuario'],
    });
  }

  async findOne(id: string) {
    const adopcion = await this.adopcionRepository.findOne({
      where: { id_adopcion: id },
      relations: ['publicacion', 'usuario'],
    });
    if (!adopcion) {
      throw new NotFoundException(`Adopción con id ${id} no encontrada`);
    }
    return adopcion;
  }

  async update(id: string, updateAdopcionDto: UpdateAdopcionDto) {
    await this.findOne(id);
    await this.adopcionRepository.update({ id_adopcion: id }, updateAdopcionDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.adopcionRepository.delete({ id_adopcion: id });
  }
}
