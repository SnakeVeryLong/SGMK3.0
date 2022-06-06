import { Module } from "@nestjs/common";
import { TSController } from "./TS.controller";
import { TsService } from './ts/ts.service';
import { TSModule } from "./TS.module";

@Module({
  imports: [TSModule],
  controllers: [TSController],
  providers: [TsService],
})

export class TShttpModule {}