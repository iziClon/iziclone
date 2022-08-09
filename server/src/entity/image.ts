import {
    Column, Entity, JoinColumn, ManyToOne,
} from 'typeorm';

import { CommonFields } from './commonFields';
import { IImage } from '../interfaces';
import { Product } from './product';

@Entity('Images', { database: 'uwETQSYns8' })
export class Image extends CommonFields implements IImage {
    @Column({
        type: 'int',
        nullable: false,
    })
    productId: number;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
    image: string;

    @ManyToOne(() => Product, (product) => product.images)
    @JoinColumn({ name: 'productId' })
    product: Product;
}
