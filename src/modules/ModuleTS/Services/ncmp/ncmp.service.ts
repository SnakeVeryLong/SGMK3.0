import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Problems } from '../../entities/problems.entity';

@Injectable()
export class NcmpService {
    constructor(
        @InjectRepository(Problems)
        private prob: Repository<Problems>
    ){}
    private readonly problems: Problems[] = [];

   async create(problems: Problems): Promise<void>{
        await this.prob.create(problems);
    }
}
