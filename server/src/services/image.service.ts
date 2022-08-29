import { getManager, UpdateResult } from 'typeorm';

import { Image } from '../entity';
import { IImage } from '../interfaces';

class ImageService {
    public async getImages(): Promise<IImage[]> {
        return getManager()
            .getRepository(Image)
            .createQueryBuilder('image')
            .getMany();
    }

    public async getImagesByProductId(productId:number):Promise<IImage[] | undefined> {
        return  getManager().getRepository(Image).find({where:{productId:productId}})

    }

    public async createImage(image: IImage): Promise<IImage> {
            return getManager().getRepository(Image).save(image);
    }

    public async updateImage(
        id?: number,
        productId?: number,
        imageRef?: string,
    ):Promise<UpdateResult> {
        return getManager().getRepository(Image)
            .update({ id }, {
                productId,
                imageRef,
            });
    }

    public async deleteImage(id:number): Promise<void> {
        await getManager().getRepository(Image).softDelete({ id });
    }
}

export const imageService = new ImageService();
