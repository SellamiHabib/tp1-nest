import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../users/entities/user.entity";

@Module({
  providers: [AuthService,UserService,JwtService],
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ],
})
export class AuthModule {}
