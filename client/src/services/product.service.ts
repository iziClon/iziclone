import { axiosService } from './axios.service';

import { urls } from '../configs';
import { IProduct } from '../interfaces';

export const productService = {
  getAll: () => axiosService.get<IProduct>(urls.products),
  getProductsByCategory: (categoryId: number) => axiosService.get<any>(`${urls.commons}/${categoryId}`),

  create: (myProduct: any) => axiosService
    .post(urls.products, myProduct)
    .then((value) => value.data),

  getProductById: (productId: string) => axiosService
    .get<IProduct>(`${urls.products}/${productId}`)
    .then((value) => value.data),

};
