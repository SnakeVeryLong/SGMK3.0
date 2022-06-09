import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Problems } from '../entities/problems.entity';

@Controller()
export class ProblemsController {

    @Post()
    create(@Body() problems: Problems){
        return `This action adds new problem`;
    }

    @Get()
    findAll(@Query() query: Problems) {
        return `This action return all problem (limit: ${query.idForProblems} items`
    }

    @Get (':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} problem`;
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() problems: Problems){
        return `This action updates a #${id} problem`;
    }

}