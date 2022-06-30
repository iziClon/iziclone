import { getManager } from 'typeorm';

import {Category, Product} from '../entity';
import {ICategory, IProduct} from '../interfaces';

class CommonService {
    public async getCategories(): Promise<ICategory[]> {
        return getManager()
            .getRepository(Category)
            .createQueryBuilder('category')
            .getMany();
    }

    public async getProductsByCategory(categoryId: number): Promise<IProduct[]> {
        return getManager().getRepository(Product)
            .find({ categoryId });
    }

    public async createCategory(category: ICategory): Promise<ICategory> {
        return getManager().getRepository(Category).save(category);
    }
}

export const commonService = new CommonService();
