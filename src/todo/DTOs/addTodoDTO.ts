import ErrorMessages from '../../common/errors/errorMessages';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class AddTodoDTO {
    @IsString({message: ErrorMessages.IS_STRING})
    @IsNotEmpty({message: ErrorMessages.NOT_EMPTY})
    @MinLength(3, {message: ErrorMessages.MIN_LENGTH})
    @MaxLength(10, {message: ErrorMessages.MAX_LENGTH})
    public name: string;
    @IsString({message: ErrorMessages.IS_STRING})
    @IsNotEmpty({message: ErrorMessages.NOT_EMPTY})
    @MinLength(10, {message: ErrorMessages.MIN_LENGTH})
    public description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}

