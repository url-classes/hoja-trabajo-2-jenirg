import { IsEmail, IsOptional, IsString, IsUrl, MaxLength, MinLength, isString } from "class-validator";

export default class CreateAutorDto{
    @IsString()
    @MinLength(2)
    @MaxLength(44)
    nombre: string;

    @IsString()
    fechaDeNacimiento: string;

    @IsString()
    libros: string;
}