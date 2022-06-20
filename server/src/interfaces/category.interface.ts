import {IProduct} from "../entity";

export interface ICategory {
    id: number;
    nameCategories: string;
    icon: string;
    products: IProduct[]
}
