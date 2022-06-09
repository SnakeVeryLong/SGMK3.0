import { Entity, PrimaryGeneratedColumn, Column, TableForeignKey, OneToMany } from "typeorm"

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

}