import { Entity, PrimaryGeneratedColumn, Column, TableForeignKey, Double, OneToMany } from "typeorm"

@Entity()
export class Problems {

    @PrimaryGeneratedColumn()
    idForProblems: number

    @Column()
    photo: string

    @Column()
    comment: string

    @Column()
    massa: number

    @Column()
    Status: string
}