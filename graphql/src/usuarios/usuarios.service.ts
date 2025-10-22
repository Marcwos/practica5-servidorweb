import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { DataTransformerService } from '../common/data-transformer.service';

@Injectable()
export class UsuariosService {
  constructor(
    private httpService: HttpService,
    private dataTransformer: DataTransformerService
  ) {}

  async findAll() {
    const response = await firstValueFrom(
      this.httpService.get('/usuario')
    );
    return this.dataTransformer.transformUsuarios(response.data);
  }

  async findOne(id: number) {
    const response = await firstValueFrom(
      this.httpService.get(`/usuario/${id}`)
    );
    return this.dataTransformer.transformUsuario(response.data);
  }

}
