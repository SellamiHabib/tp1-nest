import { Body, Controller, Post } from "@nestjs/common";
import { LoginDTO } from "./DTOs/LoginDTO";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: LoginDTO) {
    return this.authService.login(loginDto);
  }
}
