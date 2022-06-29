import { getManager } from 'typeorm';

import { Category } from '../entity';
import { ICategory } from '../interfaces';

class CommonService {
    public async getCategories(): Promise<ICategory[]> {
        return getManager()
            .getRepository(Category)
            .createQueryBuilder('category')
            .getMany();
    }

    public async createCategory(category: ICategory): Promise<ICategory> {
        return getManager().getRepository(Category).save(category);
    }
}

export const commonService = new CommonService();
