import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Problems } from '../../entities/problems.entity';

@Injectable()
export class NcmpService {
    constructor(
        @InjectRepository(Problems)
        private problemRepository: Repository<Problems>,
    ){}
    private readonly problem: Array<Problems> = [];

   async create(problems: Problems): Promise<void>{
        const probl = this.problemRepository.create(problems);
        await this.problemRepository.save(probl);
    }

   
}
