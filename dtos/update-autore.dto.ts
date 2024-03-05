import { IsEmail, IsOptional, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import CreateAutorDto from "./create-autore.dto";
//import CreateDoctorDto from "./create-doctor.dto";


class UpdateAutorDto extends PartialType(CreateAutorDto){

}

export default UpdateAutorDto;