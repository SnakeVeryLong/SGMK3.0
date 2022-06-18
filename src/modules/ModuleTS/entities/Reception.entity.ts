import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Problem } from './problems.entity';

@Entity()
export class Reception {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateStartReception: string;

  @Column()
  dateEndReception: string;

  @ManyToOne(() => Problem, (problem) => problem.reception, {
    eager: true,
    cascade: true,
  })
  problem: Problem[];
}
