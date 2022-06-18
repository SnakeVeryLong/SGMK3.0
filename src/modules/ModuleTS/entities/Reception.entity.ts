import { Entity, PrimaryGeneratedColumn, Column, TableForeignKey, OneToMany, JoinColumn, ManyToOne } from "typeorm"
import { Problems } from "./problems.entity"


@Entity()
export class Reception {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    dateStartReception: string

    @Column()
    dateEndReception: string

    @ManyToOne(type => Problems, (Problems) => Problems.reception, {eager:true, cascade:true})
    problems: Problems[]  
    
    
}