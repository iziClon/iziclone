import {IProduct} from "../entity";

export interface ICategory {
    id:number;
    nameCategory: string;
    products: IProduct[]
}
