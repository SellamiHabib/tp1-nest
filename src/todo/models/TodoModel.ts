import {TodoStatusEnum} from "../enums/todoStatusEnum";

export class Todo {
    public id: string;
    public name: string;
    public description: string;
    public createdAt: Date;
    public status: TodoStatusEnum;

    constructor(id: string, name: string, description: string, createdAt: Date, status: TodoStatusEnum) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.createdAt = createdAt;
        this.status = status;
    }
}
