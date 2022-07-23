import React, { FC } from 'react';

import css from './ProductCard.module.css';
import { IProduct } from '../../interfaces';

const ProductCardComponent: FC <{product: IProduct}> = (
  {
    product:
            {
              title,
              description,
              price,
              year,
              image,
            },
  },
) => (
  <div className={css.productCard}>
    <div>
      <img src={image} alt={title} />
    </div>
    <div className={css.info}>
      <div>
        <h2 className={css.title}>{title}</h2>
        <div className={css.description}>
          <h4>{description}</h4>
          <h2>{year}</h2>
        </div>
      </div>
      <div className={css.productFooter}>
        <h2 className={css.price}>{price} грн</h2>
      </div>
    </div>
  </div>
);

export { ProductCardComponent };
