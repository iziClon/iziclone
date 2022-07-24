import { Request, Response } from 'express';

import { IProduct } from '../interfaces';
import { productService } from '../services';

class ProductController {
    public async getProducts(req: Request, res: Response): Promise<Response<IProduct[]>> {
        const products = await productService.getProducts();
        return res.json(products);
    }

    // public async getProductsByCategory(req: Request, res: Response): Promise<Response<IProduct[]>> {
    //     const { categoryId } = req.params;
    //     const getAllProductsByCategory = await productService.getProductsByCategory(+categoryId);
    //     return res.json(getAllProductsByCategory);
    // }

    public async createProduct(req: Request, res: Response): Promise<Response<IProduct>> {
        const createdProduct = await productService.createProduct(req.body);
        return res.json(createdProduct);
    }

    public async updateProduct(req: Request, res: Response): Promise<Response<IProduct>> {
        const {
            categoryId, title, description, price, year, status, image,
        } = req.body;
        const { id } = req.params;
        const updateProduct = await productService.updateProduct(+id, categoryId, title, description, price, year, status, image);
        return res.json(updateProduct);
    }

    public async deleteProduct(req: Request, res: Response):Promise<void> {
        const { id } = req.params;
        await productService.deleteProduct(+id);
        res.json('Product deleted');
    }
}

export const productController = new ProductController();