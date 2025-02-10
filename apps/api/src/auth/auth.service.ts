import { Injectable, Logger } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    private readonly logger = new Logger('AuthService');
    constructor(private readonly userService: UserService) {}

    async register(registerDto: RegisterDto) {
        return this.userService.create(registerDto).catch((err) => {
            this.logger.error(err);
            return null;
        });
    }

    login(loginDto: LoginDto) {
        return `This action returns all auth`;
    }

    findOne(id: number) {
        return `This action returns a #${id} auth`;
    }

    update(id: number, updateAuthDto: UpdateAuthDto) {
        return `This action updates a #${id} auth`;
    }

    remove(id: number) {
        return `This action removes a #${id} auth`;
    }
}
