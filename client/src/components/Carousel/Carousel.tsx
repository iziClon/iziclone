import React, { FC } from 'react';

import { ICategory } from '../../interfaces';
import css from './Carousel.module.css';

const CarouselComponent: FC <{category: ICategory}> = (
  {
    category:
            {
              icon,
              nameCategory,
            },
  },
) => (
  <div className={css.category}>
    <div className={css.icon}>
      <img src={icon} alt={nameCategory} />
    </div>
    <h2>{nameCategory}</h2>
  </div>
);

export { CarouselComponent };
