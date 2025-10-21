import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipoCampaniaDto } from './dto/create-tipo-campania.dto';
import { UpdateTipoCampaniaDto } from './dto/update-tipo-campania.dto';
import { TipoCampania } from './entities/tipo-campania.entity';

@Injectable()
export class TipoCampaniaService {
  constructor(
    @InjectRepository(TipoCampania)
    private readonly tipoCampaniaRepository: Repository<TipoCampania>,
  ) {}

  async create(createTipoCampaniaDto: CreateTipoCampaniaDto) {
    const tipo = this.tipoCampaniaRepository.create(createTipoCampaniaDto);
    return await this.tipoCampaniaRepository.save(tipo);
  }

  async findAll() {
    return await this.tipoCampaniaRepository.find();
  }

  async findOne(id: string) {
    const tipo = await this.tipoCampaniaRepository.findOneBy({
      id_tipo_campania: id,
    });
    if (!tipo) {
      throw new NotFoundException(`Tipo de campaña con id ${id} no encontrado`);
    }
    return tipo;
  }

  async update(id: string, updateTipoCampaniaDto: UpdateTipoCampaniaDto) {
    await this.findOne(id);
    await this.tipoCampaniaRepository.update(
      { id_tipo_campania: id },
      updateTipoCampaniaDto,
    );
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.tipoCampaniaRepository.delete({ id_tipo_campania: id });
  }
}
