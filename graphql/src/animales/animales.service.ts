import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateAnimaleInput } from './dto/create-animale.input';
import { UpdateAnimaleInput } from './dto/update-animale.input';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AnimalesService {
  constructor(private readonly httpService: HttpService) {}

  async findAll() {
    const respuesta= await firstValueFrom(
      this.httpService.get('/animal')
    )
    return respuesta.data
  }
 async findOne(id: string) {
    const respuesta = await firstValueFrom(
      this.httpService.get(`/animal/${id}`));
  return respuesta.data;
  }

  async findEspecie(especieId: string) {
    const respuesta = await firstValueFrom(
      this.httpService.get(`/especie/${especieId}`)
    );
    return respuesta.data;
  }
}
