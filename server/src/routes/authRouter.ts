import { Router } from 'express';
import { authController } from '../controllers/authController';

const router = Router();

router.post('/registration', authController.registration);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/refresh');

export const authRouter = router;
