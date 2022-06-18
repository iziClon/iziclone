import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import '../../common-styles/index.css';
import '../../common-styles/normalize.css';
import { Header } from '../Header/Header';
import css from './Layout.module.css';

const Layout: FC = () => (
  <div className={css.wrapper}>
    <header className={css.header}>
      <Header />
    </header>
    <main className={css.main}>
      <Outlet />
    </main>
    <footer className={css.footer}>Footer</footer>
  </div>
);
export { Layout };
