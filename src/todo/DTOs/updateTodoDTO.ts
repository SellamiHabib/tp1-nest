import {TodoStatusEnum} from "../enums/todoStatusEnum";

export class UpdateTodoDTO {
    id: string;
    name: string;
    description: string;
    status: TodoStatusEnum;
}