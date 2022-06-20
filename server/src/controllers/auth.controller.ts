import { Request, Response } from 'express';

import { authService } from '../services';

class AuthController {
    public async registration(req: Request, res: Response) {
        const newUser = await authService.registration(req.body);
        res.cookie('refreshToken', newUser.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        return res.json(newUser);
    }

    public async login(req: Request, res: Response) {
        const { email, password } = req.body;
        const userFromDB = await authService.login(email, password);

        res.cookie('refreshToken', userFromDB.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        return res.json(userFromDB);
    }

    public async logout(req: Request, res: Response) {
        const { refreshToken } = req.cookies;
        await authService.logout(refreshToken);
        res.clearCookie('refreshToken');
        res.json('Logout successfully');
    }

}

export const authController = new AuthController();
