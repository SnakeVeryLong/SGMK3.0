import { Entity, PrimaryGeneratedColumn, Column, TableForeignKey, OneToMany, JoinColumn } from "typeorm"


@Entity()
export class KindOfProblem {

    @PrimaryGeneratedColumn()
    idForKindOfProblem: number

    @Column()
    Kind: string

}