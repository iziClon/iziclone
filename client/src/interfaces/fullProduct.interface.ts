import { IProductSubmit } from './productSubmit.interface';

export interface IFullProduct extends IProductSubmit{
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
