import { Router } from 'express';

import { productController } from '../controllers';

const router = Router();

router.get('/', productController.getProducts);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export const productRouter = router;
