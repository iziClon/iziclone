import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Logo } from '../Logo/Logo';
import css from './NavMenu.module.css';
import { useAppDispatch, useAppSelector } from '../../hook';
import { activeMenuSliceActions } from '../../store/slices/menuActive.slice';

const NavMenu: FC = () => {
  const { menuActive } = useAppSelector((state) => state.activeMenu);
  const dispatch = useAppDispatch();

  const setMenuActive = () => {
    dispatch(activeMenuSliceActions.setMenuActive(!menuActive));
  };

  return (
    <nav className={css.nav}>
      <Logo />
      <div className={css.menu}>
        <button type="button" className={css.categoriesListBtn} onClick={setMenuActive}>
          <div className={css.categoriesListWrapper}>
            <div>
              <FontAwesomeIcon icon={faBars} className={css.categoriesListIcon} />
            </div>
            <div className={css.categoriesListText}>Всі категорії</div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export { NavMenu };
