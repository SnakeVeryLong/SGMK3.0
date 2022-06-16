import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reception } from '../../entities/Reception.entity';

@Injectable()
export class ReceptionService {
    constructor(
    @InjectRepository(Reception)
    private readonly recep: Repository<Reception>, 
    ){}
    private readonly reception: Reception[] = [];

    async findAll(): Promise<Reception[]>{
        return this.recep.find({loadEagerRelations: true});
    }

    

}
