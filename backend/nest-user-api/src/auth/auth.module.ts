import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { OAuth2Strategy } from './utils/auth.strategy';
import { AuthController } from './auth.controller';
import { HttpModule } from '@nestjs/axios';
import { UsersService } from 'src/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    HttpModule,
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ OAuth2Strategy: 'oauth2' }),
  ],
  controllers: [AuthController],
  providers: [OAuth2Strategy, UsersService, AuthService],
})
export class AuthModule {}
