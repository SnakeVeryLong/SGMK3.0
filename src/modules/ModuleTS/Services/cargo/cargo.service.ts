import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cargo } from '../../entities/cargo.entity';

@Injectable()
export class CargoService {
    constructor (
        @InjectRepository(Cargo)
        private cargorepository: Repository<Cargo>,
    ) {}

    findAll(): Promise<Cargo[]> {
        return this.cargorepository.find();
    }

    findOne(id: string): Promise<Cargo>{
        return this.cargorepository.findOne(Cargo[id])
    }

    async remove(idForTS: string): Promise<void> {
        await this.cargorepository.delete(idForTS);
    }
}
