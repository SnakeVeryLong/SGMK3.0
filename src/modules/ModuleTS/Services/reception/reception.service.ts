import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Reception } from '../../entities/Reception.entity';

@Injectable()
export class ReceptionService {
    constructor(
    @InjectRepository(Reception)
    private readonly receptionRepository: Repository<Reception>, 
    private readonly httpService: HttpService
    ){}

    private readonly reception: Array<Reception> = [];

    async findAll(): Promise<Reception[]>{
        return this.receptionRepository.find({loadEagerRelations: true});
    }

    findAllHttp(): Observable<AxiosResponse<Reception[]>> {
        return this.httpService.get('http://localhost:3000/Priyom');
    }

}
