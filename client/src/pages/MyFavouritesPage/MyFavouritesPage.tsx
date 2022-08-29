import React from 'react';
import { Link } from 'react-router-dom';

import css from './MyFavouritesPage.module.css';

const MyFavouritesPage = () => (
  <section className={css.myFavouritesPageWrapper}>
    <div className={css.myFavouritesPageItem}>
      <div className={css.myFavouritesPageItemHeader}>
        <div className={css.itemHeaderTextContent}>
          <h1 className={css.itemHeaderText}>Обране</h1>
        </div>
        <div className={css.favoritesListWrapper}>
          <ul className={css.favoritesList}>
            <li className={css.listItem}>
              <Link to="/my/favourites" className={css.link}>
                <button type="button" className={css.listButton}>
                  <div className={css.buttonContent}>
                    <h2 className={css.buttonText}>Оголошення</h2>
                  </div>
                </button>
              </Link>
            </li>
            <li className={css.listItem}>
              <Link to="/my/subscriptions" className={css.link}>
                <button type="button" className={css.listButton}>
                  <div className={css.buttonContent}>
                    <h2 className={css.buttonText}>Запити</h2>
                  </div>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.mainContent}>
        <div className={css.mainInfoWrapper}>
          <div className={css.mainInfo}>
            <div className={css.mainInfoBlock}>
              <div className={css.mainBlock}>
                <div className={css.mainBlockWrapper}>
                  <div className={css.contentWrapper}>
                    <div>
                      <div className={css.contentBox}>
                        <img
                          src="https://izi.ua/cloud-cgi/static/izi-static/images/drawings/heart-in-hand.svg"
                          alt="contentIcon"
                        />
                        <h3>
                          У вас немає вибраних оголошень
                        </h3>
                        <p>
                          Знайдіть оголошення яке вам подобається <br />
                          та додайте до вибраного.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>
);

export { MyFavouritesPage };
