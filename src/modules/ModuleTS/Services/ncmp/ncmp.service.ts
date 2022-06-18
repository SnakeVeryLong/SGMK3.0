import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { DataSource, Repository } from 'typeorm';
import { Problems } from '../../entities/problems.entity';

@Injectable()
export class NcmpService {
    constructor(
        @InjectRepository(Problems)
        private problemRepository: Repository<Problems>,
        private readonly httpService: HttpService
    ){}
    private readonly problem: Array<Problems> = [];

   async create(problems: Problems): Promise<void>{
        const probl = this.problemRepository.create(problems);
        await this.problemRepository.save(probl);
    }

    postAllHttp(): Observable<AxiosResponse<Problems[]>>{
        return this.httpService.post('http://localhost:3000/custom')
    }
}
