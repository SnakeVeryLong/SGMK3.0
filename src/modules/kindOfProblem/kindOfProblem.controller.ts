import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { KindOfProblem } from './entity/kindOfProblem';


@Controller()
export class KOPController {

    @Post()
    create(@Body() kop: KindOfProblem){
        return `This action adds new KOP`;
    }

    @Get()
    findAll(@Query() query: KindOfProblem) {
        return `This action return all TS (limit: ${query.Kind} items`
    }

    @Get (':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} KOP`;
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() kop: KindOfProblem){
        return `This action updates a #${id} TS`;
    }

}