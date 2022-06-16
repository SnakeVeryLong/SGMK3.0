import { Injectable } from '@nestjs/common';
import { Problems } from '../../entities/problems.entity';

@Injectable()
export class NcmpService {
    private readonly problems: Problems[] = [];

    create(problems: Problems){
        this.problems.push(problems);
    }
}
