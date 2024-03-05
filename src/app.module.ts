import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosController } from './libros/libros.controller';
import { AutoresController } from './autores/autores.controller';
import { AutoresService } from './autores/autores.service';
import { LibrosService } from './libros/libros.service';

@Module({
  imports: [],
  controllers: [AppController, LibrosController, AutoresController],
  providers: [AppService, AutoresService, LibrosService],
})
export class AppModule {}
