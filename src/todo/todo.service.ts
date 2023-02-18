import { Injectable } from '@nestjs/common';
import {Todo} from "./models/TodoModel";
import {TodoStatusEnum} from "./enums/todoStatusEnum";
import {AddTodoDTO} from "./DTOs/addTodoDTO";
import {UpdateTodoDTO} from "./DTOs/updateTodoDTO";
import {CommonModule} from "../common/common.module";
@Injectable()
export class TodoService {
    private _todos: Todo[] = [
        new Todo("1", 'Todo 1', 'Description 1', new Date(), TodoStatusEnum.EnAttente),
        new Todo("2", 'Todo 2', 'Description 2', new Date(), TodoStatusEnum.EnCours),
        new Todo("3", 'Todo 3', 'Description 3', new Date(), TodoStatusEnum.Finalise),
    ];
    constructor(private commonModule: CommonModule) {
    }
    get todos(): Todo[] {
        return this._todos;
    }
    set todos(value: Todo[]) {
        this._todos = value;
    }
    public generateTodo(): Todo {
        const id = this.commonModule.generateUUID();
        const todo = new Todo(id, `Generated Todo with id : ${id}`, 'Default description', new Date(Date.now()), TodoStatusEnum.EnAttente);
        this.todos.push(todo);
        return todo;
    }
    public getTodoById(id: string): Todo {
        return this.todos.find(todo => todo.id === id);
    }
    public deleteTodoById(id: string): Todo[] {
        this.todos = this.todos.filter(todo => todo.id !== id);
        return this.todos;
    }
    public addTodo(todo: AddTodoDTO): Todo {
        const id = this.commonModule.generateUUID();
        const newTodo = new Todo(id, todo.name, todo.description, new Date(Date.now()), TodoStatusEnum.EnAttente);
        this.todos.push(newTodo);
        return newTodo;
    }
    public updateTodoById(id: string, todo: UpdateTodoDTO): Todo {
        const todoToUpdate = this.getTodoById(id);
        todoToUpdate.name = todo.name;
        todoToUpdate.description = todo.description;
        todoToUpdate.status = todo.status;
        return todoToUpdate;
    }

}
