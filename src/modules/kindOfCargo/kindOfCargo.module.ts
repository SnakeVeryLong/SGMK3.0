import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { KindOfCargo } from "./entity/kindOfCargo.entity";
import { KindOfCargoService } from './kind-of-cargo/kind-of-cargo.service';

@Module({
  imports: [TypeOrmModule.forFeature([KindOfCargo])],
  exports: [TypeOrmModule],
  controllers: [],
  providers: [KindOfCargoService],
})

export class KOCModule {}