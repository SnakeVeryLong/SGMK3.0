import { Entity, PrimaryGeneratedColumn, Column, TableForeignKey, OneToMany, OneToOne, JoinColumn, JoinTable, ManyToMany } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    idForUser: number

    @Column()
    FIO: string

    @Column()
    Position: string

    @Column()
    Login: string

    @Column()
    Password: string

}
