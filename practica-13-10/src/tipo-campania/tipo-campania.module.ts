import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoCampaniaService } from './tipo-campania.service';
import { TipoCampaniaController } from './tipo-campania.controller';
import { TipoCampania } from './entities/tipo-campania.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoCampania])],
  controllers: [TipoCampaniaController],
  providers: [TipoCampaniaService],
  exports: [TipoCampaniaService],
})
export class TipoCampaniaModule {}
