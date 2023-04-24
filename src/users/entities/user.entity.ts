import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import DateEntity from '../../common/entities/DateEntity';
import { CvEntity } from '../../cv/entities/cv.entity';

@Entity('user')
export class UserEntity extends DateEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Unique(['email'])
    @Column()
    email: string;

    @Unique(["username"])
    @Column({nullable: true})
    username: string;

    @Column()
    password: string;
    @OneToMany(
        () => CvEntity,
        (cv: CvEntity) => cv.user,
    )
    cvs: CvEntity[];


}
