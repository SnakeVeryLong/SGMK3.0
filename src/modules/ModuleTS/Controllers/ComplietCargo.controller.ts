import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTransportDto } from '../dto/createTransport.dto';
import { Cargo } from '../entities/cargo.entity';
import { Problem } from '../entities/problems.entity';
import { Transport } from '../entities/tranport.entity';
import { ComplietCargoService } from '../Services/compliet-cargo/compliet-cargo.service';

@Controller()
export class ComplietCargoController {
  constructor(private complieteCargoService: ComplietCargoService) {}

  @Get('s')
  async findAllTS(): Promise<Transport[]> {
    return this.complieteCargoService.findAllTS();
  }

  @Post('cargo')
  async CreateCargo(@Body() createCargo: Cargo[]) {
    this.complieteCargoService.createCargo(createCargo);
  }

  @Post('loadTs')
  async loadTransport(@Body() transport: Array<CreateTransportDto>) {
    return this.complieteCargoService.addTransport(
      transport.map((item) => item.convert()),
    );
  }
  @Post('TS')
  async CreateTS(
    @Body() createTS: Array<Transport>,
    cargo: Cargo,
    pro: Problem[],
  ) {
    // this.complieteCargo.createTS(createTS, cargo, pro);
  }
}
