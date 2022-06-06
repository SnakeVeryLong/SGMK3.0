import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { query, Response } from 'express';
import { TS } from './entities/TS.entity';

@Controller()
export class TSController {

    @Post()
    create(@Body() TS: TS){
        return `This action adds new TS`;
    }

    @Get()
    findAll(@Query() query: TS) {
        return `This action return all TS (limit: ${query.NumberTS} items`
    }

    @Get (':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} TS`;
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() ts: TS){
        return `This action updates a #${id} TS`;
    }

}