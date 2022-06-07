import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entity/role.entity';

@Injectable()
export class RoleService {
    constructor (
        @InjectRepository(Role)
        private tsrepository: Repository<Role>,
    ) {}

    findAll(): Promise<Role[]> {
        return this.tsrepository.find();
    }

    findOne(id: string): Promise<Role>{
        return this.tsrepository.findOne(Role[id])
    }

    async remove(id: string): Promise<void> {
        await this.tsrepository.delete(id);
    }
}
