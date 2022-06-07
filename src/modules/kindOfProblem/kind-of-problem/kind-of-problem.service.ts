import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KindOfProblem } from '../entity/kindOfProblem';

@Injectable()
export class KindOfProblemService {
    constructor (
        @InjectRepository(KindOfProblem)
        private tsrepository: Repository<KindOfProblem>,
    ) {}

    findAll(): Promise<KindOfProblem[]> {
        return this.tsrepository.find();
    }

    findOne(id: string): Promise<KindOfProblem>{
        return this.tsrepository.findOne(KindOfProblem[id])
    }

    async remove(idForTS: string): Promise<void> {
        await this.tsrepository.delete(idForTS);
    }

}
