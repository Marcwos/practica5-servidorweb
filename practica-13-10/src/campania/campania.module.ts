import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaniaService } from './campania.service';
import { CampaniaController } from './campania.controller';
import { Campania } from './entities/campania.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Campania])],
  controllers: [CampaniaController],
  providers: [CampaniaService],
  exports: [CampaniaService],
})
export class CampaniaModule {}
