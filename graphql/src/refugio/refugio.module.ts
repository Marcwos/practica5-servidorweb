import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RefugioService } from './refugio.service';
import { RefugioResolver } from './refugio.resolver';

@Module({
    imports: [
      HttpModule.register({
        baseURL: 'http://localhost:3005',
        timeout: 5000,
      }),
    ],
  providers: [RefugioResolver, RefugioService],
})
export class RefugioModule {}
