import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CvEntity } from "./entities/cv.entity";
import { Repository } from "typeorm";
import { AddCVDTO } from './DTOs/AddCVDTO';
import { UpdateCvDto } from './DTOs/UpdateCVDTO';

@Injectable()
export class CvService {
    constructor(
        @InjectRepository(CvEntity)
        private cvRepository: Repository<CvEntity>,
    ) {}
    async create(createCvDto: AddCVDTO) {
        const  newCv = this.cvRepository.create(createCvDto);
        try {
            return await this.cvRepository.save(newCv);
        }
        catch (e) {
            throw new ConflictException("exception detected while adding a new cv to the list ");
        }
    }
    async addCv(cv: CvEntity) {
        return await this.cvRepository.save(cv);
    }

    async findAll() {
        return await this.cvRepository.find();
    }

    async findOne(id: number) {
        const promise= this.cvRepository.findBy({ id:id });
        if (!promise) {
            throw new NotFoundException("cv not found");
        }
        return await promise;
    }

    async update(id: number, updateCvDto: UpdateCvDto) {
        return await this.cvRepository.update(id, updateCvDto);

    }

    async remove(id: number) {
        return this.cvRepository.delete(id);
    }
}
