import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cargo } from '../../entities/cargo.entity';
import { TS } from '../../entities/TS.entity';

@Injectable()
export class ComplietCargoService {
    constructor(
        @InjectRepository (TS)
        private readonly tsRep: Repository<TS>,
        @InjectRepository(Cargo)
        private readonly cargoRep: Repository<Cargo>,
    ) {}

    private readonly cargo: Array<Cargo> = [];
    private readonly ts: Array<TS> = [];

    async findAllTS(): Promise<TS[]> {
        return this.tsRep.find({relations: ['Cargo']});
    }

  async  createCargo(cargo: Cargo): Promise<Cargo>{
       const CargoC = this.cargoRep.create(cargo);
       return this.cargoRep.save(CargoC);
    }

    async createTS(ts: TS): Promise<TS>{
       const tsc = this.tsRep.create(ts);
       return this.tsRep.save(tsc)

    }

}
