import { ApiProperty } from "@nestjs/swagger";
//import { Entity } from "typeorm";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Role from "./role.entity";
import Libro from "src/libros/entities/libro.entity";

@Entity('autores')
class Autor{

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column({ type: 'varchar', length: 44 })
    @ApiProperty({
        description: 'El nombre del usuario',
        example: 'John',
    })
    nombre: string;

    @Column({ type: 'varchar', length: 44, default: '' })
    @ApiProperty()
    fechaDeNacimiento: string;

    @Column({ type: 'varchar' })
    @ApiProperty()
    libros: string;

    @ManyToOne(() => Role, (role) => role.autores)
    role: Role;
 
     @OneToMany(() => Libro, (libro) => libro.titulo)
    libro: Libro;
}
export default Autor;