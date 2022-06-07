import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { KindOfProblem } from "./entity/kindOfProblem";
import { KindOfProblemService } from './kind-of-problem/kind-of-problem.service';
import { KOPController } from "./kindOfProblem.controller";


@Module({
  imports: [TypeOrmModule.forFeature([KindOfProblem])],
  exports: [TypeOrmModule],
  controllers: [KOPController],
  providers: [KindOfProblemService],
})

export class KOPModule {}