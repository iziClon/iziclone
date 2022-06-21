import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';

import '../../common-styles/index.css';
import '../../common-styles/normalize.css';
import css from './Header.module.css';

const SearchInput: FC = () => (
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

export { Header };
