import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { KindOfCargo } from '../entities/kindOfCargo.entity';
import { Problems } from '../entities/problems.entity';
import { NcmpService } from '../Services/ncmp/ncmp.service';

@Controller()
export class NCMPController {
    constructor(private ncmp: NcmpService) {}

     @Post()
     async create (@Body() createNCMP: Problems){
         this.ncmp.create(createNCMP);
     }

}