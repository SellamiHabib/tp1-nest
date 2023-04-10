import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, Version } from '@nestjs/common';
import { Todo } from "./models/TodoModel";
import { TodoService } from "./todo.service";
import { UpdateTodoDTO } from "./DTOs/updateTodoDTO";
import { AddTodoDTO } from "./DTOs/addTodoDTO";
import { Pagination } from '../common/DTOs/paginationDTO';
import { SearchTodoDTO } from './DTOs/searchTodoDTO';
import { GetAllQueryDTO } from './DTOs/getAllQueryDTO';

@Controller('todo')
export class TodoController {

    constructor(private todoService: TodoService) {
    }

    @Get()
    getTodos(): Todo[] {
        return this.todoService.todos;
    }
    @Get()
    @Version("2")
    getTodosDb(@Query() queryParam: GetAllQueryDTO){
        return this.todoService.getAllDB(queryParam)
    }
    @Post("generate")
    generateTodo(): Todo[] {
        this.todoService.generateTodo();
        return this.todoService.todos;
    }

    @Get(":id")
    getTodoById(@Param('id') id): Todo {
        return this.todoService.getTodoById(id);
    }
    @Get('/:id')
    @Version("2")
    getTodoDb(@Param('id') id: string){
        return this.todoService.getTodoByIdDB(id);
    }
    @Delete("delete/:id")
    deleteTodoById(@Param('id') id): Todo[] {

        return this.todoService.deleteTodoById(id);
    }

    @Delete('delete/:id')
    @Version("2")
    deleteTodoDb(@Param('id') id: string) {
        return this.todoService.deleteTodoByIdDB(id);
    }
    @Version("2")
    @Post("restore/:id")
    restoreTodoDb(@Param('id') id: string){
        return this.todoService.restoreById(id)
    }

    @Post("add")
    addTodo(@Body() body: AddTodoDTO): Todo[] {
        this.todoService.addTodo(body);
        return this.todoService.todos;
    }

    @Version("2")
    @Post()
    createTodoDb(@Body() body: AddTodoDTO) {
        return this.todoService.addTodoDB(body);
    }

    @Patch("update/:id")
    updateTodoById(@Param('id') id,
                   @Body() body: UpdateTodoDTO): Todo[] {
        this.todoService.updateTodoById(id, body);
        return this.todoService.todos;
    }

    @Version("2")
    @Patch("update/:id")
    updateTodoDb(@Param('id') id, @Body() body: UpdateTodoDTO) {
        return this.todoService.updateTodoByIdDB(id, body);
    }

    @Version("2")
    @Get("stats")
    getStatsTodoDB(){
        return this.todoService.getStats();
    }

}
