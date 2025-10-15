import { Module } from '@nestjs/common';
import { CampaniaService } from './campania.service';
import { CampaniaController } from './campania.controller';

@Module({
  controllers: [CampaniaController],
  providers: [CampaniaService],
})
export class CampaniaModule {}
