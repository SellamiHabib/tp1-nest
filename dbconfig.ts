import { DataSource } from 'typeorm';
import TodoEntity from './src/todo/Entities/TodoEntity';
import DateEntity from './src/common/entities/DateEntity';
import { Test1681136789046 } from './migrations/1681136789046-test';

export default new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'test',
    entities: [DateEntity,TodoEntity],
    migrations: [Test1681136789046],
});
