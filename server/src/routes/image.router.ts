import { Router } from 'express';
import { imageController } from '../controllers';

const router = Router();

router.get('/', imageController.getImages);
router.get('/:productId', imageController.getImagesByProductId);
router.post('/', imageController.createImage);
router.put('/:id', imageController.updateImage);
router.delete('/:id', imageController.deleteImage);

export const imageRouter = router;
