import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AdopcionService } from './adopcion.service';
import { AdopcionResolver } from './adopcion.resolver';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:3005',
      timeout: 5000,
    }),
  ],
  providers: [AdopcionResolver, AdopcionService],
})
export class AdopcionModule {}
