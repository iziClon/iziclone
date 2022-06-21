import { ICategory } from './category.interface';

export interface IStateCategory {
    categories: ICategory[];
    status: string | null;
    error: string | null;
}
