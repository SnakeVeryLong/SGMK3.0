import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { userController } from "./user.controller";
import { UserService } from './user/user.service';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule],
  controllers: [userController],
  providers: [UserService],
})

export class userModule {}