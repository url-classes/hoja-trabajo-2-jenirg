import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosController } from './libros/libros.controller';
import { AutoresController } from './autores/autores.controller';
import { AutoresService } from './autores/autores.service';
import { LibrosService } from './libros/libros.service';
import { AutoresModule } from './autores/autores.module';
import { LibrosModule } from './libros/libros.module';

@Module({
  imports: [AutoresModule, LibrosModule],
  controllers: [AppController, LibrosController, AutoresController],
  providers: [AppService, AutoresService, LibrosService],
})
export class AppModule {}
