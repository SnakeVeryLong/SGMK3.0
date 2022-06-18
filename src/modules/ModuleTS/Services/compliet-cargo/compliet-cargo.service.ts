import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cargo } from '../../entities/cargo.entity';
import { Problem } from '../../entities/problems.entity';
import { Transport } from '../../entities/tranport.entity';

@Injectable()
export class ComplietCargoService {
  constructor(
    @InjectRepository(Transport)
    private readonly transportRepository: Repository<Transport>,
    @InjectRepository(Cargo)
    private readonly cargoRepository: Repository<Cargo>,
  ) {}

  async findAllTS(): Promise<Transport[]> {
    return this.transportRepository.find({ relations: ['Cargo'] });
  }

  async createCargo(cargo: Array<Cargo>): Promise<void> {
    const CargoC = this.cargoRepository.create(cargo);

    console.log(CargoC);
    await this.cargoRepository.save(CargoC);
  }

  /**
   * Метод сохранения для ТС
   * @param transport - добавляемые ТС
   */
  async addTransport(transport: Array<Transport>): Promise<Transport[]> {
    try {
      const savedTrapsort = await this.transportRepository.save(transport);
      return savedTrapsort;
    } catch (e) {
      Logger.error(
        'Ошибка сохранения ТС',
        e,
        'compliet-cargo.service.ts::addTransport',
      );
      throw new BadRequestException('Ошибка сохранения ТС');
    }
  }

  async createTS(): Promise<void> {
    const tss = new Transport();

    const tsc = this.transportRepository.create(tss);
    console.log(tsc);
    await this.transportRepository.save(tsc);
  }
}
