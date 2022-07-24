import { Response, Request, NextFunction } from 'express';
import { getManager } from 'typeorm';

import { authValidator } from '../validators/auth.validator';
import { User } from '../entity';
import { ErrorHandler } from '../error/errorHandler';

class AuthMiddleware {
    async checkIsUserExists(req:Request, res:Response, next:NextFunction) {
        try {
            const { email, phone } = req.body;

            const checkEmail = await getManager().getRepository(User).findOne({ email });
            const checkPhone = await getManager().getRepository(User).findOne({ phone });

            if (checkEmail) {
                next(new ErrorHandler(`User with this email ${email} has exist`, 400));
                return;
            }

            if (checkPhone) {
                next(new ErrorHandler(`User with this phone ${phone} has exist`, 400));
                return;
            }

            next();
        } catch (e) {
            next(e);
        }
    }

    async checkValidEmail(req: Request, res: Response, next: NextFunction) {
        try {
            const { error } = await authValidator.emailParams.validate(req.params);
            if (error) {
                next(new ErrorHandler(error.message, 400));
                return;
            }

            next();
        } catch (e: any) {
            next(e);
        }
    }

    async checkIsUserAuth(req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = req.params;

            const checkEmail = await getManager()
                .getRepository(User)
                .findOne({ email });
            if (!checkEmail) {
                next(new ErrorHandler(`User with this email ${email} doesn't exist`, 404));
                return;
            }

            next();
        } catch (e) {
            next(e);
        }
    }

    async validateRegistration(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const {
                error,
                value
            } = authValidator.registration.validate(req.body);

            if (error) {
                next(new ErrorHandler('Some fields are not validate', 400));
                return;
            }

            req.body = value;
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const authMiddleware = new AuthMiddleware();
