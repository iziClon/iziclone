import { getManager } from 'typeorm';
import bcrypt from 'bcrypt';

import { IUser } from '../interfaces';
import { User } from '../entity';
import { tokenService } from './tokenService';

class AuthService {
    async registration(user:IUser):Promise<IUser> {
        const { email, password, id } = user;
        const candidate = await getManager().getRepository(User).findOne({ email });

        if (candidate) {
            throw new Error(`Користувач з такою поштою ${email} існує`);
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const userHashed = { ...user, password: hashPassword };

        const tokens = tokenService.generateToken({ email, userId: id });
        await tokenService.saveToken(id, tokens.accessToken, tokens.refreshToken);

        return getManager().getRepository(User).save(userHashed);
    }
}

export const authService = new AuthService();
