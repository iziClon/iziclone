import React, { FC } from 'react';

import { useAppSelector } from '../../hook';

const HomePage: FC = () => {
  const { categories } = useAppSelector((state) => state.categories);
  console.log(categories, 'homePage');

  return (<p>HomePage</p>);
};

export { HomePage };
