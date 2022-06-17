import {
    Column, CreateDateColumn, DeleteDateColumn, Entity,/* OneToMany,*/ PrimaryGeneratedColumn,
} from 'typeorm';

import {IUser} from "../interfaces";


@Entity('users', { database: 'uwETQSYns8' })
export class User implements IUser {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
    name: string;

    @Column({
        type: 'int',
    })
    age: number;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        unique: true,
    })
    phone: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        unique: true,
    })
    email: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
    password: string;

    @Column({
        nullable: false,
        default: Date.now(),
    })

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: string;

    @Column()
    @DeleteDateColumn({ type: 'timestamp' })
    deletedAt?: string;

   /*@OneToMany(() => Product, (product) => product.user)
    products: Product[];*/

}
