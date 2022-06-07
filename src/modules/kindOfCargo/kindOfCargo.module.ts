import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { KindOfCargo } from "./entity/kindOfCargo.entity";
import { KindOfCargoService } from './kind-of-cargo/kind-of-cargo.service';
import { KOCController } from "./kindOfCargo.controller";

@Module({
  imports: [TypeOrmModule.forFeature([KindOfCargo])],
  exports: [TypeOrmModule],
  controllers: [KOCController],
  providers: [KindOfCargoService],
})

export class KOCModule {}