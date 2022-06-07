import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Role } from './entity/role.entity';

@Controller()
export class roleController {

    @Post()
    create(@Body() role: Role){
        return `This action adds new TS`;
    }

    @Get()
    findAll(@Query() query: Role) {
        return `This action return all TS (limit: ${query.idForRole} items`
    }

    @Get (':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} TS`;
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() status: Role){
        return `This action updates a #${id} TS`;
    }

}