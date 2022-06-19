import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm"
import { Role } from "./role.entity"
import { User } from "./user.entity"
import { Firm } from "./firm.entity"

@Entity()
export class Permission {

    @PrimaryGeneratedColumn()
    idPermission: number

    @ManyToMany(() => User, ( user) =>  user.permission, {
        cascade: true, eager: true
    })
    user: User[]

    @ManyToMany(() => Role, (role) => role.permission, {
        cascade: true, eager: true
    })
    role: Role[]

    @ManyToMany(() => Firm, (firm) => firm.permission, {
        cascade: true, eager: true
    })
    firm: Firm[]
}