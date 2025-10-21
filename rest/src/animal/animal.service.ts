import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './entities/animal.entity';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>,
  ) {}

  async create(createAnimalDto: CreateAnimalDto) {
    const animal = this.animalRepository.create(createAnimalDto);
    return await this.animalRepository.save(animal);
  }

  async findAll() {
    return await this.animalRepository.find({
      relations: ['especie', 'refugio'],
    });
  }

  async findOne(id: string) {
    const animal = await this.animalRepository.findOne({
      where: { id_animal: id },
      relations: ['especie', 'refugio'],
    });
    if (!animal) {
      throw new NotFoundException(`Animal con id ${id} no encontrado`);
    }
    return animal;
  }

  async update(id: string, updateAnimalDto: UpdateAnimalDto) {
    await this.findOne(id);
    await this.animalRepository.update({ id_animal: id }, updateAnimalDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.animalRepository.delete({ id_animal: id });
  }
}
