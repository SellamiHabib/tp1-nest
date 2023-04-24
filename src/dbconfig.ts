import { DataSource } from 'typeorm';
import TodoEntity from './todo/Entities/TodoEntity';
import { SkillEntity } from "./skill/entities/skill.entity";
import { CvEntity } from "./cv/entities/cv.entity";
import { UserEntity } from "./users/entities/user.entity";

export default new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'db',
    entities: [TodoEntity,SkillEntity,CvEntity,UserEntity],
    migrations: [],
});
