import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import {CommonModule} from "../common/common.module";
import TodoEntity from './Entities/TodoEntity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoV2Controller } from './todo.v2.controller';
import { TodoV2Service } from './todo.v2.service';

@Module({
  imports: [
    TypeOrmModule.forFeature(
        [TodoEntity]
    )
  ],
  controllers: [TodoController,TodoV2Controller],
  providers: [TodoService,TodoV2Service, CommonModule,TodoEntity]
})
export class TodoModule {}
