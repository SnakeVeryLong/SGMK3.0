import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, TableForeignKey, OneToMany, JoinColumn } from "typeorm"
import { Problems } from "./problems.entity"


@Entity()
export class KindOfProblem {

    @PrimaryGeneratedColumn()
    idForKindOfProblem: number

    @Column()
    Kind: string

    @OneToMany(type => Problems, (Problems) => Problems.kindOfProblems, {eager:true, cascade:true})
    problems: Problems
}