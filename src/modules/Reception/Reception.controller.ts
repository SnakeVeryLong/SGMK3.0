import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Reception } from './entity/Reception.entity';


@Controller()
export class ReceptionController {

    @Post()
    create(@Body() reception: Reception){
        return `This action adds new TS`;
    }

    @Get()
    findAll(@Query() query: Reception) {
        return `This action return all TS (limit: ${query.idForReception} items`
    }

    @Get (':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} TS`;
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() reception: Reception){
        return `This action updates a #${id} TS`;
    }

}