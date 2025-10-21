import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsuariosService {
  constructor(private httpService: HttpService) {}

  async findAll() {
    const response = await firstValueFrom(
      this.httpService.get('/usuario')
    );
    return response.data;
  }

  async findOne(id: number) {
    const response = await firstValueFrom(
      this.httpService.get(`/usuario/${id}`)
    );
    return response.data;
  }

}
