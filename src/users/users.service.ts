import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";
import { AddUserDTO } from './DTOs/AddUserDTO';
import { UpdateUserDto } from './DTOs/UpdateUserDTO';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) {}

    async create(createUserDto: AddUserDTO) {
        const user = this.userRepository.create(createUserDto)
        try {
            await this.userRepository.save(user);
            return user;
        }
        catch (e) {
            throw new ConflictException('an Exception occured while creating a user');
        }
    }
    async addUsers(user: UserEntity) {
        return await this.userRepository.save(user);
    }

    async findAll() {
        return await this.userRepository.find();
    }

    async findOne(id: number) {
        const user= await this.userRepository.findBy({ id:id });
        if (!user) {
            throw new NotFoundException(`User #${id} not found`);
        }
        return user;
    }
    async findOneByUsername(username: string) {
        const user= await this.userRepository.findOneBy({ username:username });
        if (!user) {
            throw new NotFoundException(`User #${username} not found`);
        }
        return user;
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        return await this.userRepository.update(id, updateUserDto);
    }

    async remove(id: number) {
        return await this.userRepository.delete(id);
    }
}
