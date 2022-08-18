import React from 'react';

import { Link } from 'react-router-dom';
import css from './MyProductsPage.module.css';

const MyProductsPage = () => (
  <section className={css.myProductsPageWrapper}>
    <div className={css.myProductsPageHeader}>
      <h1>Мої оголошення</h1>
    </div>
    <div>
      <div className={css.statusWrapper}>
        <ul className={css.statusList}>
          <li className={css.statusItem}>
            <button type="button" className={css.listButton}>Активні 0</button>
          </li>
          <li className={css.statusItem}>
            <button type="button" className={css.listButton}>Оновити 0</button>
          </li>
          <li className={css.statusItem}>
            <button type="button" className={css.listButton}>Модерація 0</button>
          </li>
          <li className={css.statusItem}>
            <button type="button" className={css.listButton}>Деактивовані 0</button>
          </li>
          <li className={css.statusItem}>
            <button type="button" className={css.listButton}>Продані 0</button>
          </li>
        </ul>
      </div>
      <div className={css.mainContent}>
        <div className={css.mainBonus}>
          <div className={css.mainBonusWrapper}>
            <div className={css.mainBonusContent}>
              <div className={css.bonusImg}>
                <img
                  src="https://izi.ua/cloud-cgi/static/izi-static/build/uk/images/bonuses-return-sr-1J.svg"
                  alt="Bonus-icon"
                />
              </div>
              <div className={css.bonusText}>
                Якщо товар не отримають, <b>ІЗІ нарахує бонуси за зворотну доставку</b>
              </div>
              <div className={css.bonusDetails}>
                <button
                  type="button"
                  className={css.bonusDetailsLink}
                >Детальніше
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={css.mainInfoWrapper}>
          <div className={css.mainInfo}>
            <img
              src="https://izi.ua/cloud-cgi/static/izi-static/build/uk/images/empty-products-1oeX8.svg"
              alt="main-icon"
            />
            <span className={css.infoText}>
              <div className={css.infoHeader}>
                <span className={css.infoHeaderText}>Почніть продавати</span>
              </div>
              Додавайте скільки завгодно оголошень, у нас немає обмежень
              <div className={css.addProduct}>
                <Link to="/createProduct" className={css.addProductLink}>
                  <div className={css.addProductButton}>
                    <div className={css.addProductItem}>
                      <svg
                        className="SvgIcon__vAlignTop--kHMXt"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M12 20c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zm0-18c5.514 0 10 4.486 10
                           10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm5.242 10a1 1 0 0 1-1 1H13v3.242a1 1 0 1 1-2
                            0V13H7.758a.997.997 0 0 1-1-1 1 1 0 0 1 1-1H11V7.758a1 1 0 1 1 2 0V11h3.242a1 1 0 0 1 1 1z"
                        />
                      </svg>
                    </div>
                    <div className={css.addProductItem}>
                      <span className={css.addProductText}>Подати оголошення</span>
                    </div>
                  </div>
                </Link>
              </div>
            </span>
          </div>

        </div>
      </div>

    </div>
  </section>
);

export { MyProductsPage };
