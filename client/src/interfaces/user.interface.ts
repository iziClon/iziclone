import { IProduct } from './product.interface';

export interface IUser {
    id?: number;
    name: string;
    age: number;
    phone: string;
    email: string;
    password: string;
    products?: IProduct[];
    createdAt?: string;
    deletedAt?: string;
}
