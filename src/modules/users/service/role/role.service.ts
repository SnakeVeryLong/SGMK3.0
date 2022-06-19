import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/modules/users/entity/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
    constructor(@InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    ){}
    private readonly role: Role[]=[];

    async findAllRole(): Promise<Role[]> {
        return this.roleRepository.find({loadEagerRelations: true});
    }
    


}
