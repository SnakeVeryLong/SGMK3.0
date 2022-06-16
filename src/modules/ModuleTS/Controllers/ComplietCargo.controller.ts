import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Cargo } from '../entities/cargo.entity';
import { TS } from '../entities/TS.entity';
import { ComplietCargoService } from '../Services/compliet-cargo/compliet-cargo.service';

@Controller()
export class ComplietCargoController {
      constructor(private complieteCargo: ComplietCargoService){}

      @Get('s')
      async findAllTS(): Promise<TS[]> {
          return this.complieteCargo.findAllTS()
      }

      @Post()
      async Create(@Body() createCargo: Cargo){
          this.complieteCargo.create(createCargo);
      }
}