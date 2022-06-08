import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/modules/User/entity/user.entity';
import { DataSource, Repository } from 'typeorm';
import { Role } from '../entity/role.entity';

@Injectable()
export class RoleService {
    constructor (
        @InjectRepository(Role)
        private rolRep: Repository<Role>,
        private datasource: DataSource
    ) {}

    findAll(): Promise<Role[]> {
        return this.rolRep.find();
    }

    findOne(id: string): Promise<Role>{
        return this.rolRep.findOne(Role[id])
    }

    async remove(id: string): Promise<void> {
        await this.rolRep.delete(id);
    }

    async saveRel (level: number, FIO: string, Login: string, password: string, Position: string){
        const role = new Role();
        role.level = level;
       

        await this.datasource.manager.save(role)

        const user = new User();
        user.FIO = FIO;
        user.Login = Login;
        user.Password = password;
        user.Position = Position;
        user.Role = [role]

        await this.datasource.manager.save(user)


    }
}
