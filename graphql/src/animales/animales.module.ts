import { Module } from '@nestjs/common';
import { AnimalesService } from './animales.service';
import { AnimalesResolver } from './animales.resolver';
import { HttpModule } from '@nestjs/axios';
import { timeout } from 'rxjs';

@Module({
  imports:[HttpModule.register({
    baseURL: 'http://localhost:3005',
    timeout: 5000
  }

  )],
  providers: [AnimalesResolver, AnimalesService],
})
export class AnimalesModule {}
