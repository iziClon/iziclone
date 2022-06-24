import React, { FC } from 'react';

import { ICategory } from '../../interfaces';
import css from './Carousel.module.css';

const CarouselComponent: FC <{category: ICategory}> = (
  {
    category:
            {
              nameCategory,
            },
  },
) => (
  <div className={css.category}>
    <h2 className={css.icon}>icon</h2>
    <h2>{nameCategory}</h2>
  </div>
);

export { CarouselComponent };
