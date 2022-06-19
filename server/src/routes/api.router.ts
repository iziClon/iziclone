import {Router} from 'express';

import {commonRouter} from './common.router';

const router = Router();

router.use('/common', commonRouter);

export const apiRouter = router;
