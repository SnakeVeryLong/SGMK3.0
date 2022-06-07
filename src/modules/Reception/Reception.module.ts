import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Reception } from "./entity/Reception.entity";
import { ReceptionController } from "./Reception.controller";
import { ReceptionService } from './reception/reception.service';


@Module({
  imports: [TypeOrmModule.forFeature([Reception])],
  exports: [TypeOrmModule],
  controllers: [ReceptionController],
  providers: [ReceptionService],
})

export class ReceptionModule {}