import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SkillEntity } from './entities/skill.entity';
import { AddSkillDTO } from './DTOs/AddSkillDTO';
import { UpdateSkillDto } from './DTOs/UpdateSkillDTO';


@Injectable()
export class SkillService {
    constructor(
        @InjectRepository(SkillEntity)
        private skillRepository: Repository<SkillEntity>,
    ) {}

    async create(createSkillDto : AddSkillDTO) {
        const skill = this.skillRepository.create(createSkillDto);
        try {
            return await this.skillRepository.save(skill);
        }
        catch (e) {
            throw new ConflictException('an Exception occured while creating a skill');
        }
    }
    async addSkill(skill: SkillEntity) {
        return await this.skillRepository.save(skill);
    }

    async findAll() {
        return await this.skillRepository.find();;
    }

    async findOne(id: number) {
        const skill= await this.skillRepository.findBy({ id:id });
        if (!skill) {
            throw new NotFoundException(`Skill #${id} not found`);
        }
        return skill;
    }

    async update(id: number, updateSkillDto : UpdateSkillDto) {
        return await this.skillRepository.update(id,updateSkillDto);
    }

    async remove(id: number) {
        return await this.skillRepository.delete(id);
    }
    async restore(id: number) {
        return await this.skillRepository.restore(id);
    }

}
