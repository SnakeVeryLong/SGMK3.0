import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Cargo } from '../entities/cargo.entity';

@Controller()
export class CargoController {

    @Post()
    create(@Body() cargo: Cargo){
        return `This action adds new KOP`;
    }

    @Get()
    findAll(@Query() query: Cargo) {
        return `This action return all TS (limit: ${query.idCargo} items`
    }

    @Get (':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} KOP`;
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() cargo: Cargo){
        return `This action updates a #${id} TS`;
    }

}