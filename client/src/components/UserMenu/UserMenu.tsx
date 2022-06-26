import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import css from './UserMenu.module.css';

const UserMenu: FC = () => (
  <div className={css.userMenu}>
    <div>
      <Link to="#">
        <div className={css.addAdvertisementWrapper}>
          <div><FontAwesomeIcon icon={faPlus} className={css.addAdvertisementIcon} /></div>
          <div className={css.addAdvertisementText}>Подати оголошення</div>
        </div>
      </Link>
    </div>
    <div className={css.login}><Link to="#">Увійти</Link></div>
  </div>
);

export { UserMenu };
