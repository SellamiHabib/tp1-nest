import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserService } from './users.service';
import { UserController } from './users.controller';

@Module({  controllers: [UserController],
    providers: [UserService],
    imports: [
        TypeOrmModule.forFeature([UserEntity])
    ],
    exports: [UserService]})
export class UsersModule {}
