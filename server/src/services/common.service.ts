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
}

export const commonService = new CommonService();
