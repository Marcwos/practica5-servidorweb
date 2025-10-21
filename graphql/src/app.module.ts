import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AnimalesModule } from './animales/animales.module';
import { RefugioModule } from './refugio/refugio.module';
import { PublicacionModule } from './publicacion/publicacion.module';
import { CampaniaModule } from './campania/campania.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    UsuariosModule,
   AnimalesModule,
   RefugioModule,
   PublicacionModule,
  AnimalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
