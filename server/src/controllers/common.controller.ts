import { Request, Response } from 'express';

import {ICategory, IProduct} from '../interfaces';

import { commonService } from '../services';

class CommonController {
    public async getCategories(req: Request, res: Response): Promise<Response<ICategory[]>> {
        const categories = await commonService.getCategories();
        return res.json(categories);
    }

    public async getProductsByCategory(req: Request, res: Response): Promise<Response<IProduct[]>> {
        const { categoryId } = req.params;
        const getAllProductsByCategory = await commonService.getProductsByCategory(+categoryId);
        return res.json(getAllProductsByCategory);
    }

    public async createCategory(req: Request, res: Response): Promise<Response<ICategory>> {
        const createdCategory = await commonService.createCategory(req.body);
        return res.json(createdCategory);
    }
}

export const commonController = new CommonController();
