import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KindOfProblem } from '../../entities/kindOfProblem.entity';

@Injectable()
export class KindOfProblemService {
    constructor (
        @InjectRepository(KindOfProblem)
        private koprepository: Repository<KindOfProblem>,
    ) {}

    findAll(): Promise<KindOfProblem[]> {
        return this.koprepository.find();
    }

    findOne(id: string): Promise<KindOfProblem>{
        return this.koprepository.findOne(KindOfProblem[id])
    }

    async remove(id: string): Promise<void> {
        await this.koprepository.delete(id);
    }

}
