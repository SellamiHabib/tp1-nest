import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty, IsNumber } from "class-validator";
import { UserEntity } from '../../users/entities/user.entity';
import { SkillEntity } from '../../skill/entities/skill.entity';

@Entity('cv')
export class CvEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column()
    name: string;

    @IsNotEmpty()
    @Column()
    firstname: string;

    @IsNumber()
    @Column()
    age: number;

    @IsNotEmpty()
    @Column()
    cin: string;

    @IsNotEmpty()
    @Column()
    job: string;

    @IsNotEmpty()
    @Column()
    path: string;

    @ManyToMany(()=>SkillEntity,(skill)=>skill.cvs)
    @JoinTable()
    skills: SkillEntity[]

    @ManyToOne(()=>UserEntity,(user)=>user.cvs)
    @JoinTable()
    user: UserEntity

}
