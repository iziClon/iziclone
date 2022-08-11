import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import css from './ProductCard.module.css';
import { IProduct } from '../../interfaces';

const ProductCardComponent: FC<{ product: IProduct }> = ({ product }) => {
  const {
    id, title, images, description, year, price,
  } = product;

  return (

    <div className={css.productCard}>
       <Link to={`productDetail/${id}`} state={product}>
        <img src={images[0].imageRef} alt={title} />
       </Link>
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
        <button type="submit">Details</button>
      </div>
    </div>

  );
};

export { ProductCardComponent };
