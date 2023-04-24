import { Injectable } from "@nestjs/common";
import { LoginDTO } from "./DTOs/LoginDTO";
import { UserService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {
  }

  async login(loginDto: LoginDTO) {
    const { username, password } = loginDto;
    const user = await this.userService.findOneByUsername(username);
    console.log(user);
    if (user && user.password === password) {
      const payload = { username, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload)
      };
    }
    return null;
  }
}
