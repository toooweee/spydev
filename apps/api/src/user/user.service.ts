import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import { genSaltSync, hashSync } from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}

    async create(user: Partial<User>) {
        const hashedPassword = this.hashPassword(user.password);

        return this.prismaService.user.create({
            data: {
                email: user.email,
                password: hashedPassword,
                roles: 'USER',
            },
        });
    }

    findAll() {
        return this.prismaService.user.findMany();
    }

    findOne(idOrEmail: string) {
        return this.prismaService.user.findFirst({
            where: {
                OR: [{ id: idOrEmail }, { email: idOrEmail }],
            },
        });
    }

    update(id: string) {
        // return this.prismaService.user.update();
    }

    delete(id: string) {
        return this.prismaService.user.delete({
            where: { id },
        });
    }

    private hashPassword(password: string) {
        return hashSync(password, genSaltSync(10));
    }
}
