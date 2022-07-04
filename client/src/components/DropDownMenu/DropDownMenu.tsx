import React, {Dispatch, FC, SetStateAction, useEffect} from 'react';

import css from './DropDownMenu.module.css';
import { useAppDispatch, useAppSelector } from '../../hook';
import { getAllCategories } from '../../store';
import { DropDownMenuItem } from '../DropDownMenuItem/DropDownMenuItem';

const DropDownMenu: FC = ()=> {
  const { categories } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    <div className={css.menu}>
      <ul>{categories.map((category) => <DropDownMenuItem key={category.id} category={category} />)}</ul>
    </div>
  );
};

export { DropDownMenu };
