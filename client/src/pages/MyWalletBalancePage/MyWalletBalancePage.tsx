import React from 'react';
import { Link } from 'react-router-dom';

import css from './MyWalletBalancePage.module.css';

const MyWalletBalancePage = () => (
  <section className={css.myBalancePageWrapper}>
    <div className={css.myBalancePageItem}>
      <div className={css.myBalancePageItemHeader}>
        <div className={css.itemHeaderTextContent}>
          <h1 className={css.itemHeaderText}>Гаманець</h1>
        </div>
        <div className={css.purchasesListWrapper}>
          <ul className={css.purchasesList}>
            <li className={css.listItem}>
              <Link to="/my/wallet-balance" className={css.link}>
                <button type="button" className={css.listButton}>
                  <div className={css.buttonContent}>
                    <h2 className={css.buttonText}>Рахунок</h2>
                  </div>
                </button>
              </Link>
            </li>
            <li className={css.listItem}>
              <Link to="/my/wallet-bonuses" className={css.link}>
                <button type="button" className={css.listButton}>
                  <div className={css.buttonContent}>
                    <h2 className={css.buttonText}>Бонуси</h2>
                  </div>
                </button>
              </Link>
            </li>
            <li className={css.listItem}>
              <Link to="/my/wallet-cards" className={css.link}>
                <button type="button" className={css.listButton}>
                  <div className={css.buttonContent}>
                    <h2 className={css.buttonText}>Картки</h2>
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
              <div className={css.topBlock}>
                <div className={css.topBlockWrapper}>
                  <div className={css.topBlockText}>
                    <p>Чудово! У вас немає заборгованості за особовим рахунком</p>
                  </div>
                  <div className={css.topBlockInfo}>
                    <div className={css.topBlockInfoWrapper}>
                      <span>
                        <div className={css.topBlockDataWrapper}>
                          <div className={css.topBlockDataHeader}>
                            <button type="button">
                              <div className={css.ButtonWrapper}>
                                <p>Особистий рахунок</p>
                                <div className={css.buttonIcon}>
                                  <span>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        transform="translate(2 2)"
                                        d="M10 0c5.514 0 10 4.486 10 10s-4.486 10-10 10S0 15.514
                                                                0 10 4.486 0 10 0zm0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8
                                                                 8-3.589 8-8-3.589-8-8-8zm0 12a1 1 0 1 1 0 2 1 1 0 1 1
                                                                  0-2zm.717-9.938c1.612.284 2.937 1.608 3.22 3.221.349
                                                                   1.99-.831 3.94-2.747 4.537a.276.276 0 0 0-.19.27 1 1
                                                                    0 1 1-2 0c0-1.006.642-1.883 1.596-2.18.835-.26
                                                                     1.574-1.127 1.37-2.282-.137-.785-.81-1.458-1.595-
                                                                     1.595a1.985 1.985 0 0 0-1.656.434C8.26 6.849 8
                                                                      7.408 8 8.002a.999.999 0 1 1-2 0c0-1.185.52-2.302
                                                                      1.429-3.065a4.022 4.022 0 0 1 3.288-.873z"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </button>
                          </div>
                          <div className={css.topBlockDataInfo}>
                            <span>0 ₴</span>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={css.mainBlock}>
                <div className={css.mainBlockWrapper}>
                  <div className={css.contentWrapper}>
                    <div>
                      <div className={css.contentBox}>
                        <img
                          src="https://izi.ua/cloud-cgi/static/izi-static/build/uk/images/money-flying-1X6fs.svg"
                          alt="contentIcon"
                        />
                        <h3>Немає операцій за особистим рахунком</h3>
                        <p>Тут будуть відображатися всі дії по оплатах послуг ІЗІ</p>
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
export { MyWalletBalancePage };
