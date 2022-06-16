import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, TableForeignKey, OneToMany, JoinColumn, ManyToOne } from "typeorm"
import { Problems } from "./problems.entity"


@Entity()
export class Reception {

    @PrimaryGeneratedColumn()
    idForReception: number

    @Column()
    DateStartReception: string

    @Column()
    DateEndReception: string

    @ManyToOne(type => Problems, (Problems) => Problems.reception, {eager:true, cascade:true})
    problems: Problems[]  
    
}