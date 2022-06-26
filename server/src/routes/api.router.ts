import { Router } from 'express';

import { commonRouter } from './common.router';
import { authRouter } from './auth.router';

const router = Router();

router.use('/common', commonRouter);
router.use('/auth', authRouter);

// @ts-ignore
router.use('*', (err, req, res, next) => {
    res.status(err.code || 500).json({ message: err.message });
});

export const apiRouter = router;
