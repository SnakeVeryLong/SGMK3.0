import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Role } from "./entity/role.entity";
import { roleController } from "./role.controller";
import { RoleService } from './role/role.service';


@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  exports: [TypeOrmModule],
  controllers: [roleController],
  providers: [RoleService],
})

export class roleModule {}