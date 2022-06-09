import { Entity, PrimaryGeneratedColumn, Column, TableForeignKey, OneToMany, JoinColumn, ManyToOne } from "typeorm"


@Entity()
export class Reception {

    @PrimaryGeneratedColumn()
    idForReception: number

    @Column()
    DateStartReception: string

    @Column()
    DateEndReception: string

  /*  @ManyToOne(type => User, (User) => User.reception, {eager: true, cascade: true})
    user: User*/
    
}