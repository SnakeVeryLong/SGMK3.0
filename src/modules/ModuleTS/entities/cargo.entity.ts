import { Entity, PrimaryGeneratedColumn, Column, TableForeignKey, Double, OneToMany, JoinColumn } from "typeorm"

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

}