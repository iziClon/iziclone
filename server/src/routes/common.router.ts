import { Router } from 'express';

import { commonController } from '../controllers';

const router = Router();

router.get('/', commonController.getCategories);
router.get('/:categoryId', commonController.getProductsByCategory);
router.post('/', commonController.createCategory);

export const commonRouter = router;
