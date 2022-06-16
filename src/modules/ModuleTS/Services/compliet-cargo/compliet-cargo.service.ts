import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cargo } from '../../entities/cargo.entity';
import { TS } from '../../entities/TS.entity';

@Injectable()
export class ComplietCargoService {
    constructor(
        @InjectRepository (TS)
        private readonly ts: Repository<TS>
    ) {}

    private readonly cargo: Cargo[] = [];
    private readonly TS: TS[] = [];

    async findAllTS(): Promise<TS[]> {
        return this.ts.find({relations: ['Cargo']});
    }

    create(cargo: Cargo){
        this.cargo.push(cargo);
    }
}
