import { IProduct } from './product.interface';

export interface IStateProductsByCategory {
    productsByCategory: IProduct[];
    status: string | null;
    error: string | null;
}
