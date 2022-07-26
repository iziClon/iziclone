/* eslint-disable */
import React, { FC, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { productService } from '../../services';

import { IProduct } from '../../interfaces';
import css from './ProductDetaids.module.css';

const ProductDetails: FC = () => {
  const [product, setProduct] = useState<IProduct>();
  const { state }:any = useLocation();

  const { productId } :any = useParams();

  useEffect(() => {
    if (state) {
      setProduct(state);
    }
    productService.getProductById(productId).then((value) => setProduct(value));
  }, [productId]);

  return (
    <div className={css.container}>

      <div className={css.container_header}>

        <div className={css.container_image} style={{backgroundImage:`url(${product?.image})`}}>
        </div>

        <div className={css.title}>

          <h2>{product?.title}</h2>
          <h4>Опубліковано 26.07.2022</h4>
          <h3>{product?.price} ₴</h3>

          <div>

          </div>

          <button type={"submit"} className={css.button_buy}>Купити</button>
          <button type={"submit"} className={css.button_write}>Написати продавцеві</button>

        </div>

      </div>

      <div className={css.bottom}>
        <h2>Опис</h2>
        <h4>{product?.description}</h4>
      </div>

    </div>


  );
};

export { ProductDetails };
