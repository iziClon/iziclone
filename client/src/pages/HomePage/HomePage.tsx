import React, { FC, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import css from './HomePage.module.css';
import { useAppDispatch, useAppSelector } from '../../hook';
import { getAllCategories, getAllProducts } from '../../store';
import { CarouselComponent } from '../../components/Carousel';
import { ProductCardComponent } from '../../components';

const HomePage: FC = () => {
  const { categories } = useAppSelector((state) => state.categories);
  const { products } = useAppSelector((state) => state.products);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [products]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className={css.homePage}>
      <div>
        <div>
          <Carousel className={css.carousel} responsive={responsive}>
            {categories.map(
              (category) => <CarouselComponent key={category.id} category={category} />,
            )}
          </Carousel>
        </div>

        <div className={css.products}>{products.map(
          (product) => <ProductCardComponent key={product.id} product={product} />,
        )}
        </div>
      </div>
    </div>
  );
};

export { HomePage };
