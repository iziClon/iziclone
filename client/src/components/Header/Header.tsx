import React, { FC } from 'react';

import css from './Header.module.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { NavMenu } from '../NavMenu/NavMenu';
import { UserMenu } from '../UserMenu/UserMenu';

const Header: FC = () => (
  <div className={css.wrapper}>
    <NavMenu />
    <SearchForm />
    <UserMenu />
  </div>
);

export { Header };
