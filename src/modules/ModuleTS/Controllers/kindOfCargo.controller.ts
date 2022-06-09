import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { KindOfCargo } from '../entities/kindOfCargo.entity';

@Controller()
export class KOCController {

    @Post()
    create(@Body() koc: KindOfCargo){
        return `This action adds new KOP`;
    }

    @Get()
    findAll(@Query() query: KindOfCargo) {
        return `This action return all TS (limit: ${query.Kind} items`
    }

    @Get (':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} KOC`;
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() kop: KindOfCargo){
        return `This action updates a #${id} KOC`;
    }

}