import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinColumn, TableForeignKey, JoinTable } from "typeorm"

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    idForRole: number

    @Column()
    level: number

}