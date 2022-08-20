import React from 'react';
import css from './MyPurchasesPage.module.css';

const MyPurchasesPage = () => (
  <section className={css.myPurchasesPageWrapper}>
    <div className={css.myPurchasesPageItem}>
      <div className={css.myPurchasesPageItemHeader}>
        <div className={css.itemHeaderTextContent}>
          <h1 className={css.itemHeaderText}>Покупки</h1>
        </div>
        <div className={css.purchasesListWrapper}>
          <ul className={css.purchasesList}>
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

export { MyPurchasesPage };
