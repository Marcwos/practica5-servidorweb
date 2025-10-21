import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { CreatePublicacionInput } from './dto/create-publicacion.input';
import { UpdatePublicacionInput } from './dto/update-publicacion.input';

@Injectable()
export class PublicacionService {
  constructor(private httpService: HttpService) {}

  async findAll() {
    const response = await firstValueFrom(
      this.httpService.get('/publicacion')
    );
    return response.data;
  }

  async findOne(id: string) {
    const response = await firstValueFrom(
      this.httpService.get(`/publicacion/${id}`)
    );
    return response.data;
  }
}
