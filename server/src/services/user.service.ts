import { getManager } from 'typeorm';

import { User } from '../entity';
import { IUser } from '../interfaces';

class UserService {
    public async getUserByEmail(email: string): Promise<IUser | undefined> {
        return getManager()
            .getRepository(User)
            .createQueryBuilder('user')
            .where('user.email = :email', { email })
            .andWhere('user.deletedAt IS NULL')
            .getOne();
    }
}

export const userService = new UserService();
