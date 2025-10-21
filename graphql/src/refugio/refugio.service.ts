import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RefugioService {
  constructor(private httpService: HttpService) {}

  async findAll() {
    const response = await firstValueFrom(
      this.httpService.get('/refugio')
    );
    return response.data;
  }

  async findOne(id: string) {
    const response = await firstValueFrom(
      this.httpService.get(`/refugio/${id}`)
    );
    return response.data;
  }
}
