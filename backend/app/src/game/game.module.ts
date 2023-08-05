import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
// import { GameController } from './game.controller';
import { GameGateway } from './game.gateway';
import { GameCollection } from './gameCollection';
import { Server } from 'socket.io';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameDataModule } from 'src/game-data/game-data.module';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { GameData } from 'src/game-data/entities/game-data.entity';
import { UsersService } from 'src/users/users.service';
import { GameDataService } from 'src/game-data/game-data.service';
import { JwtAuthModule } from 'src/auth/jwt-auth/jwt-auth.module';
import { Friend } from 'src/users/entities/friend.entity';

@Module({
  imports: [
    GameDataModule,
    UsersModule,
    TypeOrmModule.forFeature([GameData]),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Friend]),
    JwtAuthModule,
  ],
  providers: [
    GameGateway,
    GameCollection,
    Server,
    UsersService,
    GameDataService,
  ],
  //   controllers: [GameController],
})
// export class GameModule {}
export class GameModule {}
