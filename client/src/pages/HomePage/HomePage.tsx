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
  }, []);

  const responsive = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 860 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 860, min: 720 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 720, min: 460 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 460, min: 0 },
      items: 4,
    },
  };

  return (
    <div className={css.homePage}>
      <div className={css.home}>
        <Carousel className={css.carousel} responsive={responsive}>
          {categories && categories.map(
            (category) => <CarouselComponent key={category.id} category={category} />,
          )}
        </Carousel>
      </div>

      <div className={css.products}>{products.map(
        (product) => <ProductCardComponent key={product.id} product={product} />,
      )}
      </div>
    </div>
  );
};

export { HomePage };
