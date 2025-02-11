import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseUUIDPipe,
    UseInterceptors,
    ClassSerializerInterceptor
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import {UserResponse} from "./responses";
import { CurrentUser } from '@app/common/decorators';
import { JwtPayload } from '../auth/interfaces';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        const user = await this.userService.create(createUserDto);
        return new UserResponse(user)
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    async findAll() {
        const result = []
        const users = await this.userService.findAll();

        users.forEach(user => {
            result.push(new UserResponse(user));
        })

        return result
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get(':id')
    async findOne(@Param('id') idOrEmail: string) {
        const user = await this.userService.findOne(idOrEmail);
        return new UserResponse(user)
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Patch(':id')
    async update(@Param('id', ParseUUIDPipe) id: string) {
        return this.userService.update(id);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Delete(':id')
    async delete(@Param('id', ParseUUIDPipe) id: string, @CurrentUser() user: JwtPayload) {
        return this.userService.delete(id, user);
    }
}
