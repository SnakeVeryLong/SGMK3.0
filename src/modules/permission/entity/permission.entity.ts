import { Entity, PrimaryGeneratedColumn, Column, TableForeignKey, OneToMany } from "typeorm"

@Entity()
export class Permission {

    @PrimaryGeneratedColumn()
    idForPermission: number

    @Column()
    Permission: string

}