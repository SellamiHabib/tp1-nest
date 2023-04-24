import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class AddUserDTO {
    @IsNotEmpty()
    username: string;

    @IsStrongPassword()
    @IsNotEmpty()
    password: string;

    @IsEmail()
    email:string;
}
