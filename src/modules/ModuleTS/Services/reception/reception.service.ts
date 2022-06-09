import { string } from '@hapi/joi';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Reception } from '../../entities/Reception.entity';

@Injectable()
export class ReceptionService {
    constructor (
        @InjectRepository(Reception)
        private repository: Repository<Reception>,
        private datasource: DataSource
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

 /*   async saveRelUR (FIO: string, Login: string, password: string, Position: string, DateEndReception: string, DateStartReception: string){

        const reception = new Reception();
        reception.DateEndReception = DateEndReception;
        reception.DateStartReception = DateStartReception;

        await this.datasource.manager.save(reception)

        const user = new User();
        user.FIO = FIO;
        user.Login = Login;
        user.Password = password;
        user.Position = Position;
        user.reception = [reception];

        await this.datasource.manager.save(user)
    }*/
}
