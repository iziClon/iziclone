import React, { FC, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useAppDispatch, useAppSelector } from '../../hook';
import { getAllCategories } from '../../store';
import { CarouselComponent } from '../../components/Carousel';
import css from './HomePage.module.css';

const HomePage: FC = () => {
  const { categories } = useAppSelector((state) => state.categories);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

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
    <div>
      <Carousel className={css.carousel} responsive={responsive}>
        {categories.map(
          (category) => <CarouselComponent key={category.id} category={category} />,
        )}
      </Carousel>
    </div>
  );
};

export { HomePage };
