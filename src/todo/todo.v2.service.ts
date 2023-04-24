import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from "./models/TodoModel";
import { TodoStatusEnum } from "./enums/todoStatusEnum";
import { AddTodoDTO } from "./DTOs/addTodoDTO";
import { UpdateTodoDTO } from "./DTOs/updateTodoDTO";
import { CommonModule } from "../common/common.module";
import TodoEntity from './Entities/TodoEntity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GetAllQueryDTO } from './DTOs/getAllQueryDTO';
import { Pagination } from '../common/DTOs/paginationDTO';


class APIfeatures {
    constructor(
        public query: SelectQueryBuilder<TodoEntity>,
        private queryString: Pagination,
    ){}
    log
    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit
        this.query = this.query.offset(skip).limit(limit)
        return this;
    }
}

@Injectable()
export class TodoV2Service {
    private _todos: Todo[] = [
        new Todo("1", 'Todo 1', 'Description 1', new Date(), TodoStatusEnum.EnAttente),
        new Todo("2", 'Todo 2', 'Description 2', new Date(), TodoStatusEnum.EnCours),
        new Todo("3", 'Todo 3', 'Description 3', new Date(), TodoStatusEnum.Finalise),
    ];

    constructor(@InjectRepository(TodoEntity)
                private readonly todoRepository: Repository<TodoEntity>,
                private commonModule: CommonModule,
    ) {
    }

    getAllDB({status, data, ...pagination}: GetAllQueryDTO){
        const qb = this.todoRepository.createQueryBuilder("todo");
        if(data)
            qb.where("todo.name Like :data", { data: '%' + data + '%' })
                .orWhere("todo.description Like :data", { data: '%' + data + '%' })
        if(status) qb.orWhere("todo.status= :statusParam", { statusParam: status });
        const feature = new APIfeatures(qb, pagination).paginating();
        return feature.query.getMany();
    }

    async getTodoByIdDB(id: string) {
        const todo = await this.todoRepository.findOne({where: [{id: id}]});
        if (!todo)
            throw new BadRequestException("Todo not found");
        return todo;
    }

    async deleteTodoByIdDB(id: string) {
        const todo = await this.todoRepository.findOneBy({id});
        if (!todo)
            throw new NotFoundException("Todo not found");
        await this.todoRepository.softDelete(id);
        return todo;
    }

    restoreById(id: string) {
        return this.todoRepository.restore(id);
    }


    public async addTodoDB(todoData: AddTodoDTO): Promise<Todo> {
        const todo = new TodoEntity();
        todo.name = todoData.name;
        todo.description = todoData.description;
        todo.status = TodoStatusEnum.EnAttente;
        return await this.todoRepository.save(todo);
    }

    async updateTodoByIdDB(id: string, todoData: UpdateTodoDTO) {
        const todo = await this.todoRepository.findOneBy({id});
        if (!todo)
            throw new NotFoundException("Todo not found");

        todo.description = todoData.description ?? todo.description;
        todo.name = todoData.name ?? todo.name;
        todo.status = todoData.status ?? todo.status;

        return this.todoRepository.save(todo);
    }

    async getStats() {
        const res = {
            EnAttente: await this.todoRepository.countBy({status: TodoStatusEnum.EnAttente}),
            EnCours: await this.todoRepository.countBy({status: TodoStatusEnum.EnCours}),
            Finalise: await this.todoRepository.countBy({status: TodoStatusEnum.Finalise}),
        }
        console.log("hi");
        console.log(await this.todoRepository.countBy({status: TodoStatusEnum.EnAttente}));
        return res;
    }

}
