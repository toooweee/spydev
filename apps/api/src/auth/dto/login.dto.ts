import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
    @IsEmail()
    @IsString()
    email: string;

    @IsString()
    @MinLength(5)
    password: string;
}
