import {TodoStatusEnum} from "../enums/todoStatusEnum";
import { AddTodoDTO } from './addTodoDTO';
import { IsEnum, IsOptional} from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
export class UpdateTodoDTO extends PartialType(AddTodoDTO) {
    id: string;

    @IsOptional()
    @IsEnum(TodoStatusEnum)
    status?: TodoStatusEnum;
}

