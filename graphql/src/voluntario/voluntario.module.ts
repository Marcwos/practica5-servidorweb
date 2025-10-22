import { Module } from '@nestjs/common';
import { VoluntarioService } from './voluntario.service';
import { VoluntarioResolver } from './voluntario.resolver';
import { HttpModule } from '@nestjs/axios';

/**
 * Módulo GraphQL para voluntarios.
 */
@Module({
  imports:[HttpModule.register({
    baseURL: 'http://localhost:3005',
    timeout: 5000
  })],
  providers: [VoluntarioResolver, VoluntarioService],
})
export class VoluntarioModule {}
