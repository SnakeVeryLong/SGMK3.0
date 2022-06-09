import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CargoController } from "./Controllers/cargo.controller";
import { Cargo } from "./entities/cargo.entity";
import { KindOfCargo } from "./entities/kindOfCargo.entity";
import { KindOfCargoService } from "./Services/kind-of-cargo/kind-of-cargo.service";
import { KOCController } from "./Controllers/kindOfCargo.controller";
import { KindOfProblem } from "./entities/kindOfProblem.entity";
import { KindOfProblemService } from "./Services/kind-of-problem/kind-of-problem.service";
import { KOPController } from "./Controllers/kindOfProblem.controller";
import { Problems } from "./entities/problems.entity";
import { ProblemsController } from "./Controllers/problems.controller";
import { ProblemsService } from "./Services/problems/problems.service";
import { Reception } from "./entities/Reception.entity";
import { ReceptionController } from "./Controllers/Reception.controller";
import { ReceptionService } from "./Services/reception/reception.service";
import { Status } from "./entities/status.entity";
import { statusController } from "./Controllers/status.controller";
import { StatusService } from "./Services/status/status.service";
import { TS } from "./entities/TS.entity";
import { TSController } from "./Controllers/TS.controller";
import { TsService } from "./Services/ts/ts.service";

@Module({
  imports: [TypeOrmModule.forFeature([TS]), TypeOrmModule.forFeature([Cargo]), TypeOrmModule.forFeature([Status]), TypeOrmModule.forFeature([KindOfCargo]), TypeOrmModule.forFeature([KindOfProblem]), TypeOrmModule.forFeature([Problems]), TypeOrmModule.forFeature([Reception])],
  exports: [TypeOrmModule],
  controllers: [TSController, statusController, ReceptionController, ProblemsController, KOPController, KOCController, CargoController],
  providers: [TsService, StatusService, ReceptionService, ProblemsService, KindOfProblemService, KindOfCargoService],
})

export class TSModule {}

