import { type } from 'os';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CargoType } from './cargoType.entity';
import { Transport } from './tranport.entity';

@Entity()
export class Cargo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  massaBefor: number;

  @Column()
  massaAfter: number;

  @Column()
  status: string;

  @ManyToOne(() => CargoType, (cargoType) => cargoType.cargo)
  cargoType: CargoType[];

  @ManyToOne(() => Transport, (TS) => TS.cargo)
  transport: Transport[];
}
