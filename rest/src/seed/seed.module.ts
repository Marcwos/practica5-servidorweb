import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedService } from './seed.service';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Especie } from '../especie/entities/especie.entity';
import { Refugio } from '../refugio/entities/refugio.entity';
import { Animal } from '../animal/entities/animal.entity';
import { Publicacion } from '../publicacion/entities/publicacion.entity';
import { Adopcion } from '../adopcion/entities/adopcion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Usuario,
      Especie,
      Refugio,
      Animal,
      Publicacion,
      Adopcion,
    ]),
  ],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule {}