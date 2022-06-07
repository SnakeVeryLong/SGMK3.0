import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reception } from '../entity/Reception.entity';

@Injectable()
export class ReceptionService {
    constructor (
        @InjectRepository(Reception)
        private repository: Repository<Reception>,
    ) {}

    findAll(): Promise<Reception[]> {
        return this.repository.find();
    }

    findOne(id: string): Promise<Reception>{
        return this.repository.findOne(Reception[id])
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }

}
