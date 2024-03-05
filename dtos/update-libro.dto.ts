import { IsEmail, IsOptional, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import CreateLibroDto from "./create-libro.dto";


class UpdateLibroDto extends PartialType(CreateLibroDto){

}

export default UpdateLibroDto;