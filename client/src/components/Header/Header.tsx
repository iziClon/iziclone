import React, { FC } from 'react';

import css from './Header.module.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { NavMenu } from '../NavMenu/NavMenu';
import { UserMenu } from '../UserMenu/UserMenu';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';

const Header: FC = () => (
  <div>
    <div className={css.wrapper}>
      <NavMenu />
      <SearchForm />
      <UserMenu />
    </div>
    <DropDownMenu />
  </div>
);

export { Header };
