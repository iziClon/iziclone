import { axiosService } from './axios.service';

import { urls } from '../configs';
import { ICategory } from '../interfaces';

export const categoryService = {
  getAll: () => axiosService.get<ICategory>(urls.common),
};
