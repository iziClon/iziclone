import React, { FC, useEffect } from 'react';

import css from './DropDownMenu.module.css';
import { useAppDispatch, useAppSelector } from '../../hook';
import { getAllCategories } from '../../store';
import { DropDownMenuItem } from '../DropDownMenuItem/DropDownMenuItem';

const DropDownMenu: FC = () => {
  const { categories } = useAppSelector((state) => state.categories);
  const { menuActive } = useAppSelector((state) => state.activeMenu);
  const dispatch = useAppDispatch();

  const showDropDown = menuActive ? css.active : css.menu;

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    <div className={showDropDown}>
      <ul>
        {categories.map((category) => <DropDownMenuItem key={category.id} category={category} />)}
      </ul>
    </div>
  );
};

export { DropDownMenu };
