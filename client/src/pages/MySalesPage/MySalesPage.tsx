import React from 'react';

import css from './MySalesPage.module.css';

const MySalesPage = () => (
  <section className={css.mySalesPageWrapper}>
    <div className={css.mySalesPageItem}>
      <div className={css.mySalesPageItemHeader}>
        <div className={css.itemHeaderTextContent}>
          <h1 className={css.itemHeaderText}>Продажі</h1>
        </div>
        <div className={css.salesListWrapper}>
          <ul className={css.salesList}>
            <li className={css.listItem}>
              <button type="button" className={css.listButton}>
                <div className={css.buttonContent}>
                  <h2 className={css.buttonText}>Замовлення</h2>
                </div>
              </button>
            </li>
            <li className={css.listItem}>
              <button type="button" className={css.listButton}>
                <div className={css.buttonContent}>
                  <h2 className={css.buttonText}>Угоди</h2>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.mainContent}>
        <div className={css.mainBonus}>
          <div className={css.mainBonusWrapper}>
            <div className={css.mainBonusContent}>
              <div className={css.bonusImg}>
                <img
                  src="https://izi.ua/cloud-cgi/static/izi-static/build/uk/images/bonuses-return-sr-1J.svg"
                  alt="BonusIcon"
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
            <div className={css.mainInfoListWrapper}>
              <div className={css.infoListItems}>
                <div className={css.infoListItem}>
                  <button type="button" className={css.infoListButton}>
                    <span className={css.infoButtonText}>Очікують</span>
                    <span className={css.infoButtonCount}>  0</span>
                  </button>
                </div>
                <div className={css.infoListItem}>
                  <button type="button" className={css.infoListButton}>
                    <span className={css.infoButtonText}>В роботі</span>
                    <span className={css.infoButtonCount}>  0</span>
                  </button>
                </div>
                <div className={css.infoListItem}>
                  <button type="button" className={css.infoListButton}>
                    <span className={css.infoButtonText}>Відхилені</span>
                    <span className={css.infoButtonCount}>  0</span>
                  </button>
                </div>
                <div className={css.infoListItem}>
                  <button type="button" className={css.infoListButton}>
                    <span className={css.infoButtonText}>Виконані</span>
                    <span className={css.infoButtonCount}>  0</span>
                  </button>
                </div>
                <div className={css.infoListItem}>
                  <button type="button" className={css.infoListButton}>
                    <span className={css.infoButtonText}>Усі</span>
                    <span className={css.infoButtonCount}>  0</span>
                  </button>
                </div>
              </div>
            </div>
            <div className={css.mainInfoContent}>
              <img
                src="https://izi.ua/cloud-cgi/static/izi-static/build/uk/images/no-orders-by-filter-sOXTW.svg"
                alt="main-info-icon"
              />
              <div className={css.infoHeaderWrapper}>
                <span className={css.infoHeader}>Немає замовлень</span>
              </div>
              <div className={css.infoTextWrapper}>
                <span className={css.infoText}>
                  Всі оформлені замовлення через кнопку Купити, будуть відображатися на цій вкладці
                </span>
              </div>
            </div>
          </div>
          <div className={css.mainInfo} />
        </div>
      </div>
    </div>

  </section>
);

export { MySalesPage };
