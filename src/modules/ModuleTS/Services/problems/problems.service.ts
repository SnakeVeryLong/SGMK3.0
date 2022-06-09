import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Problems } from '../../entities/problems.entity';

@Injectable()
export class ProblemsService {
    constructor (
        @InjectRepository(Problems)
        private tsrepository: Repository<Problems>,
    ) {}

    findAll(): Promise<Problems[]> {
        return this.tsrepository.find();
    }

    findOne(id: string): Promise<Problems>{
        return this.tsrepository.findOne(Problems[id])
    }

    async remove(id: string): Promise<void> {
        await this.tsrepository.delete(id);
    }
}
