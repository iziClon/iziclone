import {Router} from 'express';

import {commonController} from '../controllers';

const router = Router();

router.get('/', commonController.getCategories);

export const commonRouter = router;
