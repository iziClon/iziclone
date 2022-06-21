import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import css from './SearchForm.module.css';

const SearchForm: FC = () => (
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
);

export { SearchForm };
