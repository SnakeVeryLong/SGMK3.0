import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, TableForeignKey, OneToMany } from "typeorm"

@Entity()
export class Status {

    @PrimaryGeneratedColumn()
    idForStatus: number

    @Column()
    KindStatus: string

}