import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { CreatePublicacionInput } from './dto/create-publicacion.input';
import { UpdatePublicacionInput } from './dto/update-publicacion.input';
import { DataTransformerService } from '../common/data-transformer.service';

@Injectable()
export class PublicacionService {
  constructor(
    private httpService: HttpService,
    private dataTransformer: DataTransformerService
  ) {}

  async findAll() {
    const response = await firstValueFrom(
      this.httpService.get('/publicacion')
    );
    return this.dataTransformer.transformPublicaciones(response.data);
  }

  async findOne(id: string) {
    const response = await firstValueFrom(
      this.httpService.get(`/publicacion/${id}`)
    );
    return this.dataTransformer.transformPublicacion(response.data);
  }
}
