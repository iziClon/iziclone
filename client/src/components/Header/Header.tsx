import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';

import '../../common-styles/index.css';
import '../../common-styles/normalize.css';
import css from './Header.module.css';

const Header: FC = () => (
  <div className={css.wrapper}>
    <nav className={css.nav}>
      <div className={css.logo}>iziClone</div>
      <div className={css.menu}>
        <button type="button" className={css.categoriesListBtn}>
          <div className={css.categoriesListWrapper}>
            <div>
              <FontAwesomeIcon icon={faBars} className={css.categoriesListIcon} />
            </div>
            <div className={css.categoriesListText}>Всі категорії</div>
          </div>
        </button>
      </div>
    </nav>
    <div className={css.search}>
      <form className={css.form}>
        <div className={css.formWrapper}>
          <div className={css.formInput}>
            <input type="text" placeholder="Xочу купити на IZI..." />
          </div>
          <div>
            <button className={css.formBtn} type="submit" aria-label="Знайти">
              <FontAwesomeIcon icon={faMagnifyingGlass} className={css.formBtnIcon} />
            </button>
          </div>
        </div>
      </form>
    </div>
    <div className={css.userMenu}>
      <div>
        <Link to="#">
          <div className={css.addAdvertisementWrapper}>
            <div><FontAwesomeIcon icon={faPlus} className={css.addAdvertisementIcon} /></div>
            <div>Подати оголошення</div>
          </div>
        </Link>
      </div>
      <div className={css.login}><Link to="#">Увійти</Link></div>
    </div>
  </div>
);

export { Header };
