import { getManager, UpdateResult } from 'typeorm';

import { Product } from '../entity';
import {IImage, IProduct } from '../interfaces';

class ProductService {
    public async getProducts(): Promise<IProduct[]> {
        return getManager()
            .getRepository(Product)
            .createQueryBuilder('product')
            .getMany();
    }

    // public async getProductsByCategory(categoryId: number): Promise<IProduct[]> {
    //     return getManager().getRepository(Product)
    //         .find({ categoryId });
    // }

    public async getProductById(productId:number):Promise<IProduct | undefined> {
       return  getManager().getRepository(Product).findOne({where:{id:productId}})

    }

    public async createProduct(product: IProduct): Promise<IProduct> {
        return getManager().getRepository(Product).save(product);
    }

    public async updateProduct(
        id?: number,
        categoryId?: number,
        title?: string,
        description?: string,
        price?: number,
        year?: number,
        status?: boolean,
        images?: IImage[],
    ):Promise<UpdateResult> {
        return getManager().getRepository(Product)
            .update({ id }, {
                categoryId,
                title,
                description,
                price,
                year,
                status,
                images,
            });
    }

    public async deleteProduct(id:number): Promise<void> {
        await getManager().getRepository(Product).softDelete({ id });
    }
}

export const productService = new ProductService();
