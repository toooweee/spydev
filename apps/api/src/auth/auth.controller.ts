import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    resister(@Body() registerDto: RegisterDto) {}

    @Post()
    login(@Body() loginDto: LoginDto) {}

    @Get('refresh')
    refreshTokens() {}
}
