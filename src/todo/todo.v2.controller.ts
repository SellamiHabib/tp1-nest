import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    Req,
    UsePipes,
    ValidationPipe,
    Version
} from '@nestjs/common';
import { UpdateTodoDTO } from "./DTOs/updateTodoDTO";
import { AddTodoDTO } from "./DTOs/addTodoDTO";
import { GetAllQueryDTO } from './DTOs/getAllQueryDTO';
import { TodoV2Service } from './todo.v2.service';

@Controller({path: 'todo', version: '2'})
export class TodoV2Controller {

    constructor(private todoServiceV2: TodoV2Service) {
    }

    @Get()
    getTodosDb(@Query() queryParam: GetAllQueryDTO) {
        return this.todoServiceV2.getAllDB(queryParam);
    }

    @Delete('delete/:id')
    deleteTodoDb(@Param('id') id: string) {
        return this.todoServiceV2.deleteTodoByIdDB(id);
    }

    @Post("restore/:id")
    restoreTodoDb(@Param('id') id: string) {
        return this.todoServiceV2.restoreById(id);
    }

    @Post("add")
    @UsePipes(ValidationPipe)
    createTodoDb(@Body(new ValidationPipe({transform: true})) body: AddTodoDTO) {
        console.log(body);
        return this.todoServiceV2.addTodoDB(body);
    }


    @Patch("update/:id")
    updateTodoDb(@Param('id') id, @Body() body: UpdateTodoDTO) {
        return this.todoServiceV2.updateTodoByIdDB(id, body);
    }

    @Get("stats")
    getStatsTodoDB() {
        return this.todoServiceV2.getStats();
    }

    @Get('/:id')
    getTodoDb(@Param('id') id: string) {
        return this.todoServiceV2.getTodoByIdDB(id);
    }

}
