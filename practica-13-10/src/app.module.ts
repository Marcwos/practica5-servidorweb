import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';
import { CampaniaModule } from './campania/campania.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DB_NAME,
      entities: [],
      synchronize: true,
    }),
    UsuarioModule,
    CampaniaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
