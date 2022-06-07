import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Permission } from "./entity/permission.entity";
import { permissionController } from "./permission.controller";
import { PermissionService } from './permission/permission.service';


@Module({
  imports: [TypeOrmModule.forFeature([Permission])],
  exports: [TypeOrmModule],
  controllers: [permissionController],
  providers: [PermissionService],
})

export class permissionModule {}