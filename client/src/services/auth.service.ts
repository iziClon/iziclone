import { axiosService } from './axios.service';
import { urls } from '../configs';
import { IUser, IUserLoginData } from '../interfaces';

export const authService = {
  getUserByEmail: (email: string) => axiosService.get<IUser>(`${urls.users}/${email}`)
    .then((res) => res.data),
  signUp: (user: IUser) => axiosService.post<IUser>(urls.auth.signUp, user)
    .then((res) => res.data),
  login: (userLoginData: IUserLoginData) => axiosService.post<IUser>(urls.auth.login, userLoginData)
    .then((res) => res.data),
  logout: () => axiosService.post<string>(urls.auth.logout)
    .then((res) => res.data),
};
