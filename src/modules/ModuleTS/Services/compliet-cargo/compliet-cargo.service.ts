import { any } from '@hapi/joi';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cargo } from '../../entities/cargo.entity';
import { Problems } from '../../entities/problems.entity';
import { transport } from '../../entities/TS.entity';

@Injectable()
export class ComplietCargoService {
    constructor(
        @InjectRepository (transport)
        private readonly transportRepository: Repository<transport>,
        @InjectRepository(Cargo)
        private readonly cargoRepository: Repository<Cargo>,
    ) {}

    private readonly cargo: Array<Cargo> = [];
    private  ts: Array<transport> = [];

    async findAllTS(): Promise<transport[]> {
        return this.transportRepository.find({relations: ['Cargo']});
    }

  async  createCargo(cargo: Array<Cargo>): Promise<void>{
       const CargoC = this.cargoRepository.create(cargo);
       
       console.log(CargoC)
       await this.cargoRepository.save(CargoC);
    }

    async createTS(tsp: Array<transport>, Cargo: Cargo, problems: Problems[]): Promise<void>{
       const tsc = this.transportRepository.create(tsp)
       let tss = new transport()
       tss = { 
           numberTS: "23er3",
           numderDocument: "23r34",
           date: "22.06.99",
           massaFirst: "223,4",
           dateArrival: "22.06.99",
           dateShipment: "22.06.99"
    }
       tsc[1] = tss
       tsc[2] = tss
       console.log(tsc)
       await this.transportRepository.save(tsc)
    }

}
