import { Module } from '@nestjs/common';
import Libro from './entities/libro.entity';
import { LibrosController } from './libros.controller';
import { LibrosService } from './libros.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    
    imports: [TypeOrmModule.forFeature([Libro])],
    controllers: [LibrosController],
    providers: [LibrosService],  
})
export class LibrosModule {}