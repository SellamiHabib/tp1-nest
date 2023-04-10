import DateEntity from "src/common/entities/DateEntity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TodoStatusEnum } from '../enums/todoStatusEnum';

@Entity("todo")
export default class TodoEntity extends DateEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: "varchar"})
    name: string;

    @Column({type: "varchar"})
    description: string;

    @Column({
        type: "enum",
        enum: TodoStatusEnum,
        default: TodoStatusEnum.EnAttente
    })
    status: TodoStatusEnum;
}
