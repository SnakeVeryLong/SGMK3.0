import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, TableForeignKey, OneToMany, ManyToMany, ManyToOne } from "typeorm"
import { Cargo } from "./cargo.entity"
import { Problems } from "./problems.entity"

@Entity()
export class TS {

    @PrimaryGeneratedColumn()
    idForTS: number

    @Column()
    NumberTS: string

    @Column()
    NumberOfDoc: string

    @Column({default: Date.now()})
    Date: string
    
    @Column()
    massaFirst: string

    @Column({default: Date.now()})
    DateArrival: string

    @Column({default: Date.now()})
    DateShipment: string

    @OneToMany(type => Cargo, (Cargo) => Cargo.TS, {eager: true, cascade: true})
    Cargo: Cargo

    @ManyToOne(type => Problems, (Problems) => Problems.TS, {eager:true, cascade:true})
    problems: Problems[]
}