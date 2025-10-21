import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PublicacionService } from './publicacion.service';
import { PublicacionResolver } from './publicacion.resolver';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:3005',
      timeout: 5000,
    }),
  ],
  providers: [PublicacionResolver, PublicacionService],
})
export class PublicacionModule {}
