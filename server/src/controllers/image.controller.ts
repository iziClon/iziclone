import { Request, Response } from 'express';

import { IImage } from '../interfaces';
import { imageService } from '../services';

class ImageController {
    public async getImages(req: Request, res: Response): Promise<Response<IImage[]>> {
        const images = await imageService.getImages();
        return res.json(images);
    }

    public async getImagesByProductId(req: Request, res: Response): Promise<Response<IImage[]>> {
        const { productId } = req.params;
        const getAllImagesByproduct = await imageService.getImagesByProductId(+productId);
        return res.json(getAllImagesByproduct);
    }

    public async createImage(req: Request, res: Response): Promise<Response<IImage>> {
        const createdImage = await imageService.createImage(req.body);
        return res.json(createdImage);
    }

    public async updateImage(req: Request, res: Response): Promise<Response<IImage>> {
        const {
            productId, imageRef,
        } = req.body;
        const { id } = req.params;
        const updateImage = await imageService.updateImage(+id, productId, imageRef);
        return res.json(updateImage);
    }

    public async deleteImage(req: Request, res: Response):Promise<void> {
        const { id } = req.params;
        await imageService.deleteImage(+id);
        res.json('Product deleted');
    }
}

export const imageController = new ImageController();
