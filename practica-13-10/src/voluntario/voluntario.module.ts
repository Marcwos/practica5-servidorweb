import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoluntarioService } from './voluntario.service';
import { VoluntarioController } from './voluntario.controller';
import { Voluntario } from './entities/voluntario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Voluntario])],
  controllers: [VoluntarioController],
  providers: [VoluntarioService],
  exports: [VoluntarioService],
})
export class VoluntarioModule {}
