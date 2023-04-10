import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export default class DateEntity {
    @CreateDateColumn({update: false})
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
