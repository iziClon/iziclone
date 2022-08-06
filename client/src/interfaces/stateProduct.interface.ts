import { IProduct } from './product.interface';

export interface IStateProduct {
    products: IProduct[];
    product: IProduct | null;
    status: string | null;
    error: string | null;
}
