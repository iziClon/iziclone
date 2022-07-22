import { IProduct } from './product.interface';

export interface IStateProduct {
    products: IProduct[];
    status: string | null;
    error: string | null;
    // form:[];
}
