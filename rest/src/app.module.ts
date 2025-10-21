import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';
import { CampaniaModule } from './campania/campania.module';
import { EspecieModule } from './especie/especie.module';
import { RefugioModule } from './refugio/refugio.module';
import { AnimalModule } from './animal/animal.module';
import { PublicacionModule } from './publicacion/publicacion.module';
import { AdopcionModule } from './adopcion/adopcion.module';
import { TipoCampaniaModule } from './tipo-campania/tipo-campania.module';
import { VoluntarioModule } from './voluntario/voluntario.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DB_NAME || 'tienda.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsuarioModule,
    CampaniaModule,
    EspecieModule,
    RefugioModule,
    AnimalModule,
    PublicacionModule,
    AdopcionModule,
    TipoCampaniaModule,
    VoluntarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
