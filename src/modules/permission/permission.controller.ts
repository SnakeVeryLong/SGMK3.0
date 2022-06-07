import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Permission } from './entity/permission.entity';

@Controller()
export class permissionController {

    @Post()
    create(@Body() permission: Permission){
        return `This action adds new TS`;
    }

    @Get()
    findAll(@Query() query: Permission) {
        return `This action return all TS (limit: ${query.idForPermission} items`
    }

    @Get (':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} TS`;
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() status: Permission){
        return `This action updates a #${id} TS`;
    }

}