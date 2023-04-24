import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, Version } from '@nestjs/common';
import { Todo } from "./models/TodoModel";
import { TodoService } from "./todo.service";
import { UpdateTodoDTO } from "./DTOs/updateTodoDTO";
import { AddTodoDTO } from "./DTOs/addTodoDTO";
import { Pagination } from '../common/DTOs/paginationDTO';
import { SearchTodoDTO } from './DTOs/searchTodoDTO';
import { GetAllQueryDTO } from './DTOs/getAllQueryDTO';

@Controller({path : 'todo', version : '1'})
export class TodoController {

    constructor(private todoService: TodoService) {
    }

    @Get()
    getTodos(): Todo[] {
        return this.todoService.todos;
    }
    @Post("generate")
    generateTodo(): Todo[] {
        this.todoService.generateTodo();
        return this.todoService.todos;
    }


    @Delete("delete/:id")
    deleteTodoById(@Param('id') id): Todo[] {

        return this.todoService.deleteTodoById(id);
    }

    @Post("add")
    addTodo(@Body() body: AddTodoDTO): Todo[] {
        this.todoService.addTodo(body);
        return this.todoService.todos;
    }


    @Patch("update/:id")
    updateTodoById(@Param('id') id,
                   @Body() body: UpdateTodoDTO): Todo[] {
        this.todoService.updateTodoById(id, body);
        return this.todoService.todos;
    }


    @Get(":id")
    getTodoById(@Param('id') id): Todo {
        return this.todoService.getTodoById(id);
    }

}
