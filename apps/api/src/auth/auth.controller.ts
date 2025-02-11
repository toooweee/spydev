import { Controller, Post, Body, Res, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
import { REFRESH_TOKEN } from '../token/constants';
import { RegisterDto } from './dto/register.dto';
import { Public, UserAgent } from '@app/common/decorators';

@Public()
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() loginDto: LoginDto, @Res() res: Response, @UserAgent() agent: string) {
        const tokens = await this.authService.login(loginDto, agent);
        res.cookie(REFRESH_TOKEN, tokens.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 30 * 24 * 60 * 60 * 1000,
            path: '/',
        });
        res.json(tokens);
    }

    @Post('register')
    async resister(@Body() registerDto: RegisterDto) {
        const user = await this.authService.register(registerDto);

        if (!user) {
            throw new BadRequestException('An error occurred during user registration');
        }

        return user;
    }
}
