import React, {FC} from 'react';
import {Outlet} from 'react-router-dom';

import {Header} from '../Header/Header';
import css from './Layout.module.css';
import {DropDownMenu} from '../DropDownMenu/DropDownMenu';

const Layout: FC = () => (
        <div className={css.wrapper}>
            <header className={css.header}>
                <Header/>
            </header>
            <main className={css.main}>
                <DropDownMenu/>
                <Outlet/>
            </main>
            <footer className={css.footer}>Footer</footer>
        </div>
    );
export {Layout};
