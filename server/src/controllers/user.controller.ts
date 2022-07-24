import { NextFunction, Request, Response } from 'express';

import { IUser } from '../interfaces';
import { userService } from '../services';

class UserController {
    public async getUserByEmail(req: Request, res: Response, next: NextFunction):
        Promise<Response<IUser> | undefined> {
        try {
            const { email } = req.params;
            const user = await userService.getUserByEmail(email);
            return res.json(user);
        } catch (e) {
            next(e);
        }
    }
}

export const userController = new UserController();
