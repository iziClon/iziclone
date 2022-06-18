import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';

import styles from './Layout.module.css';

const Layout: FC = () => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <Header />
    </header>
    <main className={styles.main}>
      <Outlet />
    </main>
    <footer className={styles.footer}>Footer</footer>
  </div>
);

export { Layout };
