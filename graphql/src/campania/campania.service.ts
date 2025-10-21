import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateCampaniaInput } from './dto/create-campania.input';
import { UpdateCampaniaInput } from './dto/update-campania.input';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CampaniaService {
  constructor(private readonly httpService: HttpService){}

  async findAll() {
    const respuesta = await firstValueFrom(
      this.httpService.get('/campania')
    );
    return respuesta.data
  }

  async findOne(id: string) {
    const respuesta= await firstValueFrom(
      this.httpService.get(`/campania/${id}`)
    );
  return respuesta.data;
  }
}
