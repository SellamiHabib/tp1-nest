import { IsNotEmpty, IsNumber, Length, MinLength } from "class-validator";


export class AddCVDTO {
    @IsNotEmpty()
    @Length(3, 10)
    name: string;

    @IsNotEmpty()
    @Length(3, 10)
    firstname: string;

    @IsNumber()
    age: number;


    @IsNotEmpty()
    @MinLength(10)
    path: string;



}
