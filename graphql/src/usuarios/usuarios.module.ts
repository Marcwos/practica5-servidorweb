import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UsuariosService } from './usuarios.service';
import { UsuariosResolver } from './usuarios.resolver';
import { DataTransformerService } from '../common/data-transformer.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:3005',
      timeout: 5000,
    }),
  ],
  providers: [UsuariosResolver, UsuariosService, DataTransformerService],
})
export class UsuariosModule {}
