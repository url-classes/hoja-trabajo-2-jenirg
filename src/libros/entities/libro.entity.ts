import { IsInt, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import Autor from "src/autores/entities/autor.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

Entity('libros')
class Libro{

    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 44})
    titulo: string;
    @Column({type: 'varchar', length: 44})
    añoPublicacion: string;
    @Column({type: 'varchar', length: 44})
    genero: string;
    @Column({type: 'varchar', length: 44})
    autor2: string;

    @ManyToOne(() => Autor, (autor) => autor.nombre)
    autor: Autor;
 

}
export default Libro;