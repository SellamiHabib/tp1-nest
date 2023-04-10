import { IsEnum, IsOptional, IsString, MaxLength } from "class-validator";
import { TodoStatusEnum } from '../enums/todoStatusEnum';
import ErrorMessages from '../../common/errors/errorMessages';


export class SearchTodoDTO {
    @IsOptional()
    @IsString({message: ErrorMessages.IS_STRING})
    @MaxLength(10)
    data: string;

    @IsOptional()
    @IsEnum(TodoStatusEnum)
    status?: TodoStatusEnum;
}
