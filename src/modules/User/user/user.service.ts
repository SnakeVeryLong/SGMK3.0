import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
    constructor (
        @InjectRepository(User)
        private tsrepository: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.tsrepository.find();
    }

    findOne(id: string): Promise<User>{
        return this.tsrepository.findOne(User[id])
    }

    async remove(id: string): Promise<void> {
        await this.tsrepository.delete(id);
    }
}
