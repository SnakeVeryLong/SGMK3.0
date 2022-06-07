import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Problems } from "./entity/problems.entity";
import { ProblemsService } from './problems/problems.service';


@Module({
  imports: [TypeOrmModule.forFeature([Problems])],
  exports: [TypeOrmModule],
  controllers: [],
  providers: [ProblemsService],
})

export class ProblemsModule {}
