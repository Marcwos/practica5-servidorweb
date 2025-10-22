import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

/**
 * Servicio que delega llamadas al backend REST para la entidad Voluntario.
 */
@Injectable()
export class VoluntarioService {
  constructor(private readonly httpService: HttpService) {}

  /**
   * Obtiene todos los voluntarios desde el backend REST.
   */
  async findAll() {
    const respuesta = await firstValueFrom(this.httpService.get('/voluntario'));
    return respuesta.data;
  }

  /**
   * Obtiene un voluntario por su ID.
   * @param id Identificador del voluntario.
   */
  async findOne(id: string) {
    const respuesta = await firstValueFrom(this.httpService.get(`/voluntario/${id}`));
    return respuesta.data;
  }
}
