import { Request, Response } from 'express';

import { authService } from '../services';
import { IUser } from '../interfaces';

class AuthController {
    public async registration(req:Request, res:Response):Promise<Response<IUser>> {
        const newUser = await authService.registration(req.body);
        return res.json(newUser);
    }

    public async login(req:Request, res:Response) {
        console.log('login');
    }

    public async logout(req:Request, res:Response) {
        console.log('logout');
    }
}

export const authController = new AuthController();
