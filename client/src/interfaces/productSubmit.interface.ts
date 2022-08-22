import { IFullProduct } from './fullProduct.interface';

export interface IProductSubmit extends IFullProduct{
    product: {
        categoryId: number;
        userId: number;
        title: string;
        description: string;
        price: number;
        year?: number;
        status: boolean;
    }
    images: string [];
}
