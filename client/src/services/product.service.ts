import { axiosService } from './axios.service';

import { urls } from '../configs';
import { IProduct } from '../interfaces';

export const productService = {
  getAll: () => axiosService.get<IProduct[]>(urls.product),
  getProductsByCategory: (categoryId: number) => axiosService.get<any>(`${urls.common}/${categoryId}`),
  create: (myProduct: any) => axiosService
    .post(urls.product, myProduct)
    .then((value) => console.log(value.data, 'service')),
};
