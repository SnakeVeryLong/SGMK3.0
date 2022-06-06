import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TS } from '../entities/TS.entity';

@Injectable()
export class TsService {
    constructor (
        @InjectRepository(TS)
        private tsrepository: Repository<TS>,
    ) {}

    findAll(): Promise<TS[]> {
        return this.tsrepository.find();
    }

    async remove(idForTS: string): Promise<void> {
        await this.tsrepository.delete(idForTS);
    }
}
