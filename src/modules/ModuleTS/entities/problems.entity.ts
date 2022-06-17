import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, TableForeignKey, Double, OneToMany, ManyToOne } from "typeorm"
import { KindOfProblem } from "./kindOfProblem.entity"
import { Reception } from "./Reception.entity"
import { transport } from "./TS.entity"

@Entity()
export class Problems {

    @PrimaryGeneratedColumn()
    idForProblems: number

    @Column()
    photo: string

    @Column()
    comment: string

    @Column()
    massa: number

    @Column()
    status: string

    @OneToMany(type => Reception, (Reception) => Reception.problems)
    reception: Reception

    @OneToMany(type => transport, (TS) => TS.problems)
    ts: transport

    @ManyToOne(type => KindOfProblem, (KindOfProblem) => KindOfProblem.problems)
    kindOfProblems: KindOfProblem[]
}