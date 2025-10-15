import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdopcionService } from './adopcion.service';
import { AdopcionController } from './adopcion.controller';
import { Adopcion } from './entities/adopcion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Adopcion])],
  controllers: [AdopcionController],
  providers: [AdopcionService],
  exports: [AdopcionService],
})
export class AdopcionModule {}
