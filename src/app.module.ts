import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosController } from './libros/libros.controller';
import { AutoresController } from './autores/autores.controller';

@Module({
  imports: [],
  controllers: [AppController, LibrosController, AutoresController],
  providers: [AppService],
})
export class AppModule {}
