import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/modules/Role/entity/role.entity';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {

    constructor (
        @InjectRepository(User)
        private usRep: Repository<User>,
        private datasource: DataSource,
    ) {}

    findAll(): Promise<User[]> {
        return this.usRep.find();
    }

    findOne(id: string): Promise<User>{
        return this.usRep.findOne(User[id])
    }

    async remove(id: string): Promise<void> {
        await this.usRep.delete(id);
    }

    async saveRel (level: number, FIO: string, Login: string, password: string, Position: string){
        const user = new User();
        user.FIO = FIO;
        user.Login = Login;
        user.Password = password;
        user.Position = Position;

        await this.datasource.manager.save(user)

        const role = new Role();
        role.level = level;
        role.user = [user];

        await this.datasource.manager.save(role)
    }

}
