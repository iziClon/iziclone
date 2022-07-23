import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hook';
import { getAllProductsByCategory } from '../../store';
import css from '../HomePage/HomePage.module.css';
import { ProductCardComponent } from '../../components';

const CategoryPage: FC = () => {
  const { productsByCategory } = useAppSelector((state) => state.productsByCategory);

  const dispatch = useAppDispatch();

  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(getAllProductsByCategory(categoryId!));
  }, []);

  return (
    <div className={css.products}>{productsByCategory.map(
      (productByCategory) => (
        <ProductCardComponent
          key={productByCategory.id}
          product={productByCategory}
        />
      ),
    )}
    </div>
  );
};

export { CategoryPage };
