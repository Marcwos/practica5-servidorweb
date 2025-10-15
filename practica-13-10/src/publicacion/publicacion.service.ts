import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePublicacionDto } from './dto/create-publicacion.dto';
import { UpdatePublicacionDto } from './dto/update-publicacion.dto';
import { Publicacion } from './entities/publicacion.entity';

@Injectable()
export class PublicacionService {
  constructor(
    @InjectRepository(Publicacion)
    private readonly publicacionRepository: Repository<Publicacion>,
  ) {}

  async create(createPublicacionDto: CreatePublicacionDto) {
    const publicacion = this.publicacionRepository.create(createPublicacionDto);
    return await this.publicacionRepository.save(publicacion);
  }

  async findAll() {
    return await this.publicacionRepository.find({
      relations: ['usuario', 'animal'],
    });
  }

  async findOne(id: string) {
    const publicacion = await this.publicacionRepository.findOne({
      where: { id_publicacion: id },
      relations: ['usuario', 'animal'],
    });
    if (!publicacion) {
      throw new NotFoundException(`Publicación con id ${id} no encontrada`);
    }
    return publicacion;
  }

  async update(id: string, updatePublicacionDto: UpdatePublicacionDto) {
    await this.findOne(id);
    await this.publicacionRepository.update(
      { id_publicacion: id },
      updatePublicacionDto,
    );
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.publicacionRepository.delete({ id_publicacion: id });
  }
}
