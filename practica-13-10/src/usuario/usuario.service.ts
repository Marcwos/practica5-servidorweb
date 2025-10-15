import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuarioNuevo = this.usuarioRepository.create(createUsuarioDto);
    return await this.usuarioRepository.save(usuarioNuevo);
  }

  async findAll() {
    return await this.usuarioRepository.find();
  }

  async findOne(id: string) {
    const usuarioEncontrado = await this.usuarioRepository.findOneBy({
      id_usuario: id,
    });
    if (!usuarioEncontrado) {
      throw new NotFoundException('No se encontro el usuario');
    }
    return usuarioEncontrado;
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioEncontrado = await this.usuarioRepository.findOneBy({
      id_usuario: id,
    });
    if (!usuarioEncontrado) {
      throw new NotFoundException('No se encontro el usuario');
    }
    await this.usuarioRepository.update({ id_usuario: id }, updateUsuarioDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const usuarioEncontrado = await this.findOne(id);
    if (!usuarioEncontrado) {
      throw new NotFoundException('No se encontro el usuario');
    }
    return await this.usuarioRepository.delete({ id_usuario: id });
  }
}
