import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Status } from '../entity/status.entity';

@Injectable()
export class StatusService {

    constructor (
        @InjectRepository(Status)
        private tsrepository: Repository<Status>,
    ) {}

    findAll(): Promise<Status[]> {
        return this.tsrepository.find();
    }

    findOne(id: string): Promise<Status>{
        return this.tsrepository.findOne(Status[id])
    }

    async remove(id: string): Promise<void> {
        await this.tsrepository.delete(id);
    }
}
