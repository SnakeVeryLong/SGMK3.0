import { User } from "src/modules/User/entity/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinColumn, TableForeignKey, JoinTable } from "typeorm"

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    idForRole: number

    @Column()
    level: number

    @ManyToMany(type => User, (User) => User.Role, {eager: true, cascade: true})
    user: User[];

}