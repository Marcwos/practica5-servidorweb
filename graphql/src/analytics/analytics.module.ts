import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AnalyticsResolver } from './analytics.resolver';
import { AnalyticsService } from './analytics.service';

/**
 * Módulo de Analytics.
 * Exporta queries agregadas que usan múltiples endpoints REST.
 */
@Module({
  imports: [
    HttpModule.register({ baseURL: 'http://localhost:3005' }),
  ],
  providers: [AnalyticsResolver, AnalyticsService],
  exports: [AnalyticsService],
})
export class AnalyticsModule {}
import { Module } from '@nestjs/common';
import { AnalyticsResolver } from './analytics.resolver';
import { AnalyticsService } from './analytics.service';
import { HttpModule } from '@nestjs/axios';

/**
 * AnalyticsModule
 * Contiene resolvers y servicios para consultas agregadas y vistas de dashboard.
 */
@Module({
  imports: [HttpModule.register({ baseURL: 'http://localhost:3005', timeout: 5000 })],
  providers: [AnalyticsResolver, AnalyticsService],
})
export class AnalyticsModule {}
