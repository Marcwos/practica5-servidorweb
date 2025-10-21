import { Module } from '@nestjs/common';
import { CampaniaService } from './campania.service';
import { CampaniaResolver } from './campania.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[HttpModule.register({
    baseURL: 'http://localhost:3005',
    timeout: 5000
  })],

  providers: [CampaniaResolver, CampaniaService],
})
export class CampaniaModule {}
