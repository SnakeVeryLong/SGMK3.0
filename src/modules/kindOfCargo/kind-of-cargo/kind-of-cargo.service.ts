import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KindOfCargo } from '../entity/kindOfCargo.entity';

@Injectable()
export class KindOfCargoService {
    constructor (
        @InjectRepository(KindOfCargo)
        private kocrepository: Repository<KindOfCargo>,
    ) {}

    findAll(): Promise<KindOfCargo[]> {
        return this.kocrepository.find();
    }

    findOne(id: string): Promise<KindOfCargo>{
        return this.kocrepository.findOne(KindOfCargo[id])
    }

    async remove(id: string): Promise<void> {
        await this.kocrepository.delete(id);
    }
}
