import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class EspecieService {
  constructor(private readonly httpService: HttpService) {}

  async findAll() {
    const respuesta = await firstValueFrom(this.httpService.get('/especie'));
    return respuesta.data;
  }

  async findOne(id: string) {
    const respuesta = await firstValueFrom(this.httpService.get(`/especie/${id}`));
    return respuesta.data;
  }
}
