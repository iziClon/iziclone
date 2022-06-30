import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import { ICategory } from '../../interfaces';
import css from './Carousel.module.css';

const CarouselComponent: FC <{category: ICategory}> = (
  {
    category:
            {
              id,
              icon,
              nameCategory,
            },
  },
) => (
  <div className={css.category}>
    <Link to={`/category/${id}`} state={id}>
      <div className={css.icon}>
        <img src={icon} alt={nameCategory} />
      </div>
      <h2>{nameCategory}</h2>
    </Link>
  </div>
);

export { CarouselComponent };
