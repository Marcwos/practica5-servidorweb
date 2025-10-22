import { Module } from '@nestjs/common';
import { EspecieService } from './especie.service';
import { EspecieResolver } from './especie.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[HttpModule.register({
    baseURL: 'http://localhost:3005',
    timeout: 5000
  })],
  providers: [EspecieResolver, EspecieService],
})
export class EspecieModule {}
