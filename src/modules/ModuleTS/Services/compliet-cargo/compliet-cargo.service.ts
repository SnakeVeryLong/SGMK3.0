import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Cargo } from '../../entities/cargo.entity';
import { TS } from '../../entities/TS.entity';

@Injectable()
export class ComplietCargoService {
    constructor(
        @InjectRepository (TS)
        private readonly tsRep: Repository<TS>,
        private dataSource: DataSource
    ) {}

    private readonly cargo: Array<Cargo> = [];
    private readonly ts: Array<TS> = [];

    async findAllTS(): Promise<TS[]> {
        return this.tsRep.find({relations: ['Cargo']});
    }

  async  createCargo(cargo: Cargo): Promise<void>{
       await this.cargo.push(cargo);
    }

    async createTS(ts: TS): Promise<void>{
        await this.ts.push(ts);
    }

}
