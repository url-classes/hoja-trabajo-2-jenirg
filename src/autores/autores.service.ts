import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Autor from './entities/autor.entity';
import CreateAutorDto from 'dtos/create-autore.dto';
import UpdateAutorDto from 'dtos/update-autore.dto';

@Injectable()
export class DoctorsService {
    private records = [];

    constructor(
        @InjectRepository(Autor)
        private readonly usersRepository: Repository<Autor>,
      ) {}

      findAll() {
        return this.usersRepository.find();
      }

      async findOne(id: number) {
        const record = await this.usersRepository.findOne({
          where: { id },
        });
    
        if (!record) {
         throw new NotFoundException(`User #${id} not found`);
        }
    
        return record;
      }

      //create(new_user: CreateUserDto) {
        create(new_user: CreateAutorDto) {  
      if (new_user.nombre === undefined) {
          // throw new HttpException('Name is required', HttpStatus.BAD_REQUEST);
         // throw new BadRequestException('Name is required');
        }
    
        const user = this.usersRepository.create(new_user);
        return this.usersRepository.save(user); // return the user created
    
        const new_record = {
          ...new_user,
          id: this.records.length + 1,
        };
        this.records.push(new_record);
        return new_record;
      }

      async update(id: number, update_user: UpdateAutorDto) {
        const user = await this.findOne(id);
        this.usersRepository.merge(user, update_user);
        return this.usersRepository.save(user);
      }

      async remove(id: number) {
        const user = await this.findOne(id);
       
        return this,this.usersRepository.remove(user);
      }
}