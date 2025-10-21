import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AnimalesModule } from './animales/animales.module';

@Module({
  imports: [UsuariosModule, AnimalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
