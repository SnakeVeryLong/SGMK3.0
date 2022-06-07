import { Entity, PrimaryGeneratedColumn, Column, TableForeignKey, OneToMany, JoinColumn } from "typeorm"


@Entity()
export class Reception {

    @PrimaryGeneratedColumn()
    idForReception: number

    @Column()
    DateStartReception: Date

    @Column()
    DateEndReception: Date

}