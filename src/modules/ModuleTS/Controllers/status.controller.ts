import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Status } from '../entities/status.entity';

@Controller()
export class statusController {

    @Post()
    create(@Body() status: Status){
        return `This action adds new TS`;
    }

    @Get()
    findAll(@Query() query: Status) {
        return `This action return all TS (limit: ${query.idForStatus} items`
    }

    @Get (':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} TS`;
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() status: Status){
        return `This action updates a #${id} TS`;
    }

}