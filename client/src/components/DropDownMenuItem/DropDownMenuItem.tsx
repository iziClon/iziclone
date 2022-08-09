import React, { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { Link } from 'react-router-dom';
import css from './DropDownMenuItem.module.css';
import { ICategory } from '../../interfaces';

const DropDownMenuItem: FC <{category: ICategory}> = (
  {
    category:
            {
              id,
              icon,
              nameCategory,
            },
  },
) => {
    return (
        <li>
          <div className={css.container}>
            <Link to={`/category/${id}`} className={css.categoryLink}>
              <div className={css.categoryWrapper}>
                <div className={css.categoryIcon}>
                  <img src={icon} alt={`${nameCategory} Icon`} />
                </div>
                <div className={css.nameBlock}>
                  <div>{nameCategory}</div>
                  <div>
                    <FontAwesomeIcon icon={faAngleRight} className={css.categoryArrow} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </li>
    );
}

export { DropDownMenuItem };
