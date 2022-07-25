import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import css from './UserMenu.module.css';
import { useAppSelector } from '../../hook';
import { UserToolbar } from '../UserToolbar/UserToolbar';

const UserMenu = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className={css.userMenu}>
      <div>
        <Link to="/">
          <div className={css.addAdvertisementWrapper}>
            <div><FontAwesomeIcon icon={faPlus} className={css.addAdvertisementIcon} />
            </div>
            <div className={css.addAdvertisementText}>Подати оголошення</div>
          </div>
        </Link>
      </div>
      {
                !user
                  ? <div className={css.login}><Link to="/login">Увійти</Link></div>
                  : <UserToolbar />
            }
    </div>
  );
};

export { UserMenu };
