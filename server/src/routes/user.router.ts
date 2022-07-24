import { Router } from 'express';

import { userController } from '../controllers';
import { authMiddleware } from '../middlewares';

const router = Router();

router.get(
    '/:email',
    authMiddleware.checkValidEmail,
    authMiddleware.checkIsUserAuth,
    userController.getUserByEmail,
);

export const userRouter = router;
