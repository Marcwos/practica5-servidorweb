import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { CreateAdopcionInput } from './dto/create-adopcion.input';
import { UpdateAdopcionInput } from './dto/update-adopcion.input';

@Injectable()
export class AdopcionService {
  constructor(private httpService: HttpService) {}

  async findAll() {
    const response = await firstValueFrom(
      this.httpService.get('/adopcion')
    );
    return response.data;
  }

  async findOne(id: string) {
    const response = await firstValueFrom(
      this.httpService.get(`/adopcion/${id}`)
    );
    return response.data;
  }

}
