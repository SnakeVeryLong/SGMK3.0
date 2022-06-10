import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, TableForeignKey, JoinColumn, OneToMany } from "typeorm"
import { Cargo } from "./cargo.entity"

@Entity()
export class KindOfCargo {

    @PrimaryGeneratedColumn()
    idKindOfCargo: number

    @Column()
    Kind: string

    @OneToMany(type => Cargo, (Cargo) => Cargo.kindOfCargo, {eager:true, cascade: true})
    Cargo: Cargo
}