import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    // post request of /auth/signUp route
    @Post('signUp')
    signUp() {
        return this.authService.signUp();
    }

    @HttpCode(HttpStatus.OK)
    @Post('signIn')
    signIn() {
        return this.authService.signIn();
    }

}
