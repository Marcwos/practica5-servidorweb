import { Module } from '@nestjs/common';
import { EspecieService } from './especie.service';
import { EspecieResolver } from './especie.resolver';
import { HttpModule } from '@nestjs/axios';

/**
 * Módulo GraphQL para la entidad Especie.
 *
 * Importa HttpModule para conectarse al backend REST que expone los endpoints
 * de `especie`. Registra el resolver y servicio como proveedores.
 */

@Module({
  imports:[HttpModule.register({
    baseURL: 'http://localhost:3005',
    timeout: 5000
  })],
  providers: [EspecieResolver, EspecieService],
})
export class EspecieModule {}
