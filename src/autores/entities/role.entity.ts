import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Autor from "./autor.entity";

@Entity('roles')
class Role{

    
    //Se usa uuid porque es mas seguro
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ type: 'varchar', length: 44})
    nombre: string;

   // @OneToMany(() => User, (user) => user.role)
   // users: User[];
    
   @OneToMany(() => Autor, (autor) => autor.nombre)
   autores: Autor[];
}
export default Role;