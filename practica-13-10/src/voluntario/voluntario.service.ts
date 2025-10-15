import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVoluntarioDto } from './dto/create-voluntario.dto';
import { UpdateVoluntarioDto } from './dto/update-voluntario.dto';
import { Voluntario } from './entities/voluntario.entity';

@Injectable()
export class VoluntarioService {
  constructor(
    @InjectRepository(Voluntario)
    private readonly voluntarioRepository: Repository<Voluntario>,
  ) {}

  async create(createVoluntarioDto: CreateVoluntarioDto) {
    const voluntario = this.voluntarioRepository.create(createVoluntarioDto);
    return await this.voluntarioRepository.save(voluntario);
  }

  async findAll() {
    return await this.voluntarioRepository.find({
      relations: ['usuario', 'campania'],
    });
  }

  async findOne(id: string) {
    const voluntario = await this.voluntarioRepository.findOne({
      where: { id_voluntario: id },
      relations: ['usuario', 'campania'],
    });
    if (!voluntario) {
      throw new NotFoundException(`Voluntario con id ${id} no encontrado`);
    }
    return voluntario;
  }

  async update(id: string, updateVoluntarioDto: UpdateVoluntarioDto) {
    await this.findOne(id);
    await this.voluntarioRepository.update(
      { id_voluntario: id },
      updateVoluntarioDto,
    );
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.voluntarioRepository.delete({ id_voluntario: id });
  }
}
