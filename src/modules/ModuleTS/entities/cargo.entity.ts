import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, TableForeignKey, Double, OneToMany, JoinColumn, ManyToOne } from "typeorm"
import { KindOfCargo } from "./kindOfCargo.entity"
import { TS } from "./TS.entity"

@Entity()
export class Cargo {

    @PrimaryGeneratedColumn()
    idCargo: number

    @Column()
    massaBefor: number

    @Column()
    massaAfter: number

    @Column()
    Status: string

    @ManyToOne(type => KindOfCargo, (KindOfCargo) => KindOfCargo.Cargo)
    kindOfCargo: KindOfCargo[]    

    @ManyToOne(type => TS, (TS) => TS.Cargo)
    TS: TS[]
}