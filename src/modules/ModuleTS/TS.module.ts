import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComplietCargoController } from "./Controllers/ComplietCargo.controller";
import { NCMPController } from "./Controllers/NotCustomMadeProduct.controller";
import { ReceptionController } from "./Controllers/Reception.controller";
import { Cargo } from "./entities/cargo.entity";
import { KindOfCargo } from "./entities/kindOfCargo.entity";
import { KindOfProblem } from "./entities/kindOfProblem.entity";
import { Problems } from "./entities/problems.entity";
import { Reception } from "./entities/Reception.entity";
import { transport } from "./entities/TS.entity";
import { HttpConfigService } from "./httpConfigService";
import { ComplietCargoService } from "./Services/compliet-cargo/compliet-cargo.service";
import { NcmpService } from "./Services/ncmp/ncmp.service";
import { ReceptionService } from "./Services/reception/reception.service";


@Module({
  imports: [
  TypeOrmModule.forFeature([transport]), 
  TypeOrmModule.forFeature([Cargo]), 
  TypeOrmModule.forFeature([KindOfCargo]), 
  TypeOrmModule.forFeature([KindOfProblem]), 
  TypeOrmModule.forFeature([Problems]), 
  TypeOrmModule.forFeature([Reception]),
  HttpModule.registerAsync({
    useClass: HttpConfigService
  })],
  exports: [TypeOrmModule],
  controllers: [
  ComplietCargoController, 
  NCMPController, 
  ReceptionController],
  providers: [
  ComplietCargoService, 
  NcmpService, 
  ReceptionService],
})


export class TSModule {}

