import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PremierModule} from './premier/premier.module';
import {TodoController} from './todo/todo.controller';
import {TodoModule} from './todo/todo.module';
import {CommonModule} from './common/common.module';
import {TodoService} from "./todo/todo.service";

@Module({
    imports: [PremierModule, TodoModule, CommonModule],
    controllers: [AppController, TodoController],
    providers: [AppService, TodoService, CommonModule],
})
export class AppModule {
}
