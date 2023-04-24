import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { CommonModule } from './common/common.module';
import TodoEntity from './todo/Entities/TodoEntity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CvEntity } from './cv/entities/cv.entity';
import { SkillEntity } from './skill/entities/skill.entity';
import { UserEntity } from './users/entities/user.entity';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { CvModule } from "./cv/cv.module";
import { SkillModule } from "./skill/skill.module";
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [TodoModule, CommonModule,CvModule,UsersModule,SkillModule,
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "127.0.0.1",
            username: "root",
            password: "",
            database: "db",
            entities: [TodoEntity,CvEntity,SkillEntity,UserEntity],
            synchronize: true
        }),
        UsersModule,AuthModule],
    controllers: [AppController],
    providers: [AppService, CommonModule],
})
export class AppModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes({ path: "v2/todo/*", method:RequestMethod.ALL })
    }
}
