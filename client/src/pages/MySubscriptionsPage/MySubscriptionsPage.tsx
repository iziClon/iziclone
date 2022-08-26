import { Link } from 'react-router-dom';
import React from 'react';

import css from './MySubscriptionsPage.module.css';


const MySubscriptionsPage = () => (
  <section className={css.mySubscriptionsPageWrapper}>
    <div className={css.mySubscriptionsPageItem}>
      <div className={css.mySubscriptionsPageItemHeader}>
        <div className={css.itemHeaderTextContent}>
          <h1 className={css.itemHeaderText}>Обране</h1>
        </div>
        <div className={css.subscriptionsListWrapper}>
          <ul className={css.subscriptionsList}>
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
                          src="https://izi.ua/cloud-cgi/static/izi-static/build/uk/images/hand-heart-arGqT.svg"
                          alt="contentIcon"
                        />
                        <h3>
                          У вас поки немає підписок на запити
                        </h3>
                        <p>
                          Введіть у пошук те, що ви шукаєте, та підпишіться. <br />
                          На пошту та у вибране будуть надходити нові пропозиції
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

export { MySubscriptionsPage };
