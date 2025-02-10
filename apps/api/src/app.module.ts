import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TokenModule } from './token/token.module';

@Module({
    imports: [
        UserModule,
        PrismaModule,
        AuthModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TokenModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
