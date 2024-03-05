import { Module } from '@nestjs/common';
import { RolesController } from './roles/roles.controller';
import { RolesService } from './roles/roles.service';
import { RolesService } from './roles/roles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Role from './entities/role.entity';
import Autor from './entities/autor.entity';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';
import { RolesController } from './roles/roles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Autor, Role])],
  controllers: [ AutoresController, RolesController],
  providers: [AutoresService, RolesService]
})

export class AutoresModule {}
