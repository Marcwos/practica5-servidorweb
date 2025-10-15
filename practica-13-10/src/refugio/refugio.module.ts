import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RefugioService } from './refugio.service';
import { RefugioController } from './refugio.controller';
import { Refugio } from './entities/refugio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Refugio])],
  controllers: [RefugioController],
  providers: [RefugioService],
  exports: [RefugioService],
})
export class RefugioModule {}
