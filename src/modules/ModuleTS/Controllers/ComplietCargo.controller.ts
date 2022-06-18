import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Cargo } from '../entities/cargo.entity';
import { Problems } from '../entities/problems.entity';
import { transport } from '../entities/TS.entity';
import { ComplietCargoService } from '../Services/compliet-cargo/compliet-cargo.service';

@Controller()
export class ComplietCargoController {
      constructor(private complieteCargo: ComplietCargoService){}

      @Get('s')
      async findAllTS(): Promise<transport[]> {
          return this.complieteCargo.findAllTS()
      }

      @Post('cargo')
      async CreateCargo(@Body() createCargo: Cargo[]){
          this.complieteCargo.createCargo(createCargo);     
      }

      @Post('TS')
      async CreateTS(@Body() createTS: Array<transport>, cargo: Cargo, pro: Problems[]){
          this.complieteCargo.createTS(createTS, cargo, pro);
      }
      
}