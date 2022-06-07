import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permission } from '../entity/permission.entity';

@Injectable()
export class PermissionService {
    constructor (
        @InjectRepository(Permission)
        private tsrepository: Repository<Permission>,
    ) {}

    findAll(): Promise<Permission[]> {
        return this.tsrepository.find();
    }

    findOne(id: string): Promise<Permission>{
        return this.tsrepository.findOne(Permission[id])
    }

    async remove(id: string): Promise<void> {
        await this.tsrepository.delete(id);
    }
}
