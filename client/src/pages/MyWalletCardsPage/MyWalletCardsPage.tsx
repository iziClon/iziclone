import React from 'react';
import { Link } from 'react-router-dom';

import css from './MyWalletCardsPage.module.css';

const MyWalletCardsPage = () => (
  <section className={css.myCardsPageWrapper}>
    <div className={css.myCardsPageItem}>
      <div className={css.myCardsPageItemHeader}>
        <div className={css.itemHeaderTextContent}>
          <h1 className={css.itemHeaderText}>Гаманець</h1>
        </div>
        <div className={css.cardsListWrapper}>
          <ul className={css.cardsList}>
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
              <div className={css.mainBlock}>
                <div className={css.mainBlockWrapper}>
                  <div className={css.contentWrapper}>
                    <div>
                      <div className={css.contentBox}>
                        <img
                          src="https://izi.ua/cloud-cgi/static/izi-static/build/uk/images/add-card-placeholder-v81Ok.svg"
                          alt="contentIcon"
                        />
                        <h3>Єдиний надійний цифровий EVO-гаманець</h3>
                        <p>EVO — сім&apos;я маркетплейсов для онлайн-шопінгу,<br />
                          де кожен знайде те, що шукає
                        </p>

                        <button type="button">
                          <div className={css.buttonWrapper}>
                            <div className={css.buttonIcon}>
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  fillRule="evenodd"
                                  transform="translate(2 4)"
                                >
                                  <mask
                                    id="b"
                                    fill="#fff"
                                  >
                                    <path
                                      d="M17 14c.552 0 1-.449 1-1V6H2v7c0 .551.
                                                                            448 1 1 1h14zM3 2c-.552 0-1 .449-1 1v1h16V3
                                                                            c0-.551-.448-1-1-1H3zm14-2c1.654 0 3 1.346
                                                                            3 3v10c0 1.654-1.346 3-3 3H3c-1.654 0-3-1.
                                                                            346-3-3V3c0-1.654 1.346-3 3-3h14zM8 9a2 2 0
                                                                             0 1 0 4 1.987 1.987 0 0 1-1.5-.69c-.366.41
                                                                             9-.899.69-1.5.69a2 2 0 0 1 0-4c.601 0 1.1
                                                                             34.271 1.5.69C6.866 9.271 7.399 9 8 9z"
                                    />
                                  </mask>
                                  <g
                                    fill="currentColor"
                                    mask="url(#b)"
                                  >
                                    <path d="M-2-4h24v24H-2z" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div className={css.buttonText}>Додати карту</div>
                          </div>
                        </button>

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

export { MyWalletCardsPage };
