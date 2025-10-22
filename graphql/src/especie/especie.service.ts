import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

/**
 * Servicio que actúa como adaptador entre el resolver GraphQL y el
 * backend REST. Usa HttpService para realizar peticiones HTTP y
 * retorna los datos tal cual los devuelve la API REST.
 */
@Injectable()
export class EspecieService {
  constructor(private readonly httpService: HttpService) {}

  /**
   * Llama al endpoint REST `GET /especie` y devuelve la respuesta.
   * @returns Promise con el array de especies.
   */
  async findAll() {
    const respuesta = await firstValueFrom(this.httpService.get('/especie'));
    return respuesta.data;
  }

  /**
   * Llama al endpoint REST `GET /especie/:id` para obtener una especie
   * por su identificador.
   * @param id ID de la especie a buscar.
   * @returns Promise con la especie o valor vacío si no existe.
   */
  async findOne(id: string) {
    const respuesta = await firstValueFrom(this.httpService.get(`/especie/${id}`));
    return respuesta.data;
  }
}
