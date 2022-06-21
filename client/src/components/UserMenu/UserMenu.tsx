import React, { FC } from 'react';
// import { Link } from 'react-router-dom'; теги а замінити на Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import css from './UserMenu.module.css';

const UserMenu: FC = () => (
  <div className={css.userMenu}>
    <div>
      <a href="#">
        <div className={css.addAdvertisementWrapper}>
          <div><FontAwesomeIcon icon={faPlus} className={css.addAdvertisementIcon} /></div>
          <div className={css.addAdvertisementText}>Подати оголошення</div>
        </div>
      </a>
    </div>
    <div className={css.login}><a href="#">Увійти</a></div>
  </div>
);

export { UserMenu };
