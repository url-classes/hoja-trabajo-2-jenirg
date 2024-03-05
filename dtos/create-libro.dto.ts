import { IsEmail, IsOptional, IsString, IsUrl, MaxLength, MinLength, isString } from "class-validator";

export default class CreateLibroDto{
    @IsString()
    @MinLength(2)
    @MaxLength(44)
    titulo: string;

    @IsString()
    añoPublicacion: string;

    @IsString()
    genero: string;

    @IsString()
    autor2: string;

}