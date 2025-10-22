import { Module } from '@nestjs/common';
import { AnalyticsResolver } from './analytics.resolver';
import { AnalyticsService } from './analytics.service';
import { HttpModule } from '@nestjs/axios';
import { DataTransformerService } from '../common/data-transformer.service';

@Module({
  imports: [HttpModule.register({ baseURL: 'http://localhost:3005', timeout: 5000 })],
  providers: [AnalyticsResolver, AnalyticsService, DataTransformerService],
})
export class AnalyticsModule {}
