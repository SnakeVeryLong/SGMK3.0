import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TS } from "./entities/TS.entity";
import { TSController } from "./TS.controller";
import { TsService } from './ts/ts.service';

@Module({
  imports: [TypeOrmModule.forFeature([TS])],
  exports: [TypeOrmModule],
  controllers: [TSController],
  providers: [TsService],
})

export class TSModule {}
