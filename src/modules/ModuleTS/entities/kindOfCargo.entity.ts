import { Entity, PrimaryGeneratedColumn, Column, TableForeignKey, JoinColumn, OneToMany } from "typeorm"

@Entity()
export class KindOfCargo {

    @PrimaryGeneratedColumn()
    idKindOfCargo: number

    @Column()
    Kind: string

}