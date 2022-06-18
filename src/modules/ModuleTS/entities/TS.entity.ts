import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Cargo } from "./cargo.entity"
import { Problems } from "./problems.entity"

@Entity()
export class transport {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    numberTS: string

    @Column()
    numderDocument: string

    @Column({default: Date.now()})
    date: string
    
    @Column()
    massaFirst: string

    @Column({default: Date.now()})
    dateArrival: string

    @Column({default: Date.now()})
    dateShipment: string

    @OneToMany(type => Cargo, (Cargo) => Cargo.TS, {eager: true, cascade: true})
    cargo: Cargo

    @ManyToOne(type => Problems, (Problems) => Problems.ts, {eager:true, cascade:true})
    problems: Problems[]
}