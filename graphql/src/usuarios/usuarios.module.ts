import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UsuariosService } from './usuarios.service';
import { UsuariosResolver } from './usuarios.resolver';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:3005',
      timeout: 5000,
    }),
  ],
  providers: [UsuariosResolver, UsuariosService],
})
export class UsuariosModule {}
