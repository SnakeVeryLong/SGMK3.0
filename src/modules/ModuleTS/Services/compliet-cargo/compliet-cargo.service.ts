import { Injectable } from '@nestjs/common';
import { Cargo } from '../../entities/cargo.entity';
import { TS } from '../../entities/TS.entity';

@Injectable()
export class ComplietCargoService {
    private readonly cargo: Cargo[] = [];
    private readonly TS: TS[] = [];

    findAllCargo(): Cargo[] {
        return this.cargo;
    }

    findAllTS(): TS[] {
        return this.TS;
    }

    create(cargo: Cargo){
        this.cargo.push(cargo);
    }
}
