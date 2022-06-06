import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TS } from "./entities/TS.entity";

@Module({
  imports: [TypeOrmModule.forFeature([TS])],
  exports: [TypeOrmModule],
})

export class TSModule {}
