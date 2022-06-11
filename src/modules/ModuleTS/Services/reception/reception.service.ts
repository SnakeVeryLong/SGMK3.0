import { Injectable } from '@nestjs/common';
import { Reception } from '../../entities/Reception.entity';

@Injectable()
export class ReceptionService {
    private readonly reception: Reception[] = [];

    findAll(): Reception[]{
        return this.reception;
    }

  
}
