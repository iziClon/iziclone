import {
    Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn,
    CreateDateColumn, DeleteDateColumn,
} from 'typeorm';
import { IToken } from '../interfaces';

import { User } from './user';

@Entity('tokens', { database: 'uwETQSYns8' })
export class Token implements IToken {
    @PrimaryGeneratedColumn()
        id:number;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        accessToken: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        refreshToken: string;

    @Column({
        type: 'int',
    })
        userId: number;

    @Column({
        nullable: false,
        default: Date.now(),
    })

    @CreateDateColumn({ type: 'timestamp' })
        createdAt: string;

    @Column()
    @DeleteDateColumn({ type: 'timestamp' })
        deletedAt?: string;

    @OneToOne(() => User)
    @JoinColumn({ name: 'userId' })
        user:User;
}
