import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cargo } from '../entities/cargo.entity';
import { Problem } from '../entities/problems.entity';
import { Transport } from '../entities/tranport.entity';
import { ComplietCargoService } from '../Services/compliet-cargo/compliet-cargo.service';

@Controller()
export class ComplietCargoController {
  constructor(private complieteCargo: ComplietCargoService) {}

  @Get('s')
  async findAllTS(): Promise<Transport[]> {
    return this.complieteCargo.findAllTS();
  }

  @Post('cargo')
  async CreateCargo(@Body() createCargo: Cargo[]) {
    this.complieteCargo.createCargo(createCargo);
  }

  @Post('TS')
  async CreateTS(
    @Body() createTS: Array<Transport>,
    cargo: Cargo,
    pro: Problem[],
  ) {
    this.complieteCargo.createTS(createTS, cargo, pro);
  }
}
