import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { SeedService } from './seed.service';

async function bootstrap() {
  console.log('🚀 Iniciando aplicación para seed...');
  
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });

  const seedService = app.get(SeedService);

  try {
    await seedService.seedDatabase();
    console.log('🎉 Seed ejecutado correctamente!');
  } catch (error) {
    console.error('❌ Error durante el seed:', error);
    process.exit(1);
  } finally {
    await app.close();
  }
}

bootstrap();