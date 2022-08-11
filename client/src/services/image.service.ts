import { axiosService } from './axios.service';

import { urls } from '../configs';
import { IImage } from '../interfaces';

export const imageService = {
  getAll: () => axiosService.get<IImage>(urls.images),

  create: (myImage: any) => axiosService
    .post(urls.images, myImage)
    .then((value) => value.data),

};
