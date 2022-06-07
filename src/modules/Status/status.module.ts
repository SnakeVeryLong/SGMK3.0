import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Status } from "./entity/status.entity";
import { statusController } from "./status.controller";
import { StatusService } from './status/status.service';


@Module({
  imports: [TypeOrmModule.forFeature([Status])],
  exports: [TypeOrmModule],
  controllers: [statusController],
  providers: [StatusService],
})

export class statusModule {}