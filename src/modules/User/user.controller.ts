import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { User } from './entity/user.entity';

@Controller()
export class userController {

    @Post()
    create(@Body() user: User){
        return `This action adds new TS`;
    }

    @Get()
    findAll(@Query() query: User) {
        return `This action return all TS (limit: ${query.idForUser} items`
    }

    @Get (':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} TS`;
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() status: User){
        return `This action updates a #${id} TS`;
    }

}