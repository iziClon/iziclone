import { NextFunction, Request, Response } from 'express';

import { authService } from '../services';
import { emailService } from '../services/email.service';
import { emailEnum } from '../constans/email.enum';

class AuthController {
    public async registration(req: Request, res: Response, next:NextFunction) {
        try {
            const { email, name } = req.body;

            const newUser = await authService.registration(req.body);
            await emailService.sendEmail(email, emailEnum.WELCOME, { username: name });

            res.cookie('refreshToken', newUser.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            });
            return res.json(newUser);
        } catch (e) {
            next(e);
        }
    }

    public async login(req: Request, res: Response, next:NextFunction) {
        try {
            const { email, password } = req.body;

            const userFromDB = await authService.login(email, password);
            // await emailService.sendEmail(email, emailEnum.LOGIN, { username: userFromDB.name });

            res.cookie('refreshToken', userFromDB.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            });
            return res.json(userFromDB);
        } catch (e) {
            next(e);
        }
    }

    public async logout(req: Request, res: Response, next:NextFunction) {
        try {
            const { refreshToken } = req.cookies;

            await authService.logout(refreshToken);

            res.clearCookie('refreshToken');
            res.json('Logout successfully');
        } catch (e) {
            next(e);
        }
    }
}

export const authController = new AuthController();
