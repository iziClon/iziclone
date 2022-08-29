import React from 'react';
import css from './MyRatingAndReviewsPage.module.css';

const MyRatingAndReviewsPage = () => (
  <div>
    <section className={css.myRatingPageWrapper}>
      <div className={css.myRatingPageItem}>
        <div className={css.myRatingPageItemHeader}>
          <div className={css.itemHeaderTextContent}>
            <h1 className={css.itemHeaderText}>Рейтинг та відгуки</h1>
          </div>
          <div className={css.ratingListWrapper}>
            <ul className={css.ratingList}>
              <li className={css.listItem}>
                <button type="button" className={css.listButton}>
                  <div className={css.buttonContent}>
                    <h2 className={css.buttonText}>Рейтинг</h2>
                  </div>
                </button>
              </li>
              <li className={css.listItem}>
                <button type="button" className={css.listButton}>
                  <div className={css.buttonContent}>
                    <h2 className={css.buttonText}>Відгуки</h2>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.mainContent}>
          <div className={css.mainInfoWrapper}>
            <div className={css.mainInfo}>
              <div className={css.mainInfoContent}>
                <div className={css.mainInfoContentBlock}>
                  <div className={css.mainInfoContentBlockWrapper}>
                    <div className={css.blockContent}>
                      <div className={css.dataBlock}>
                        <div>
                          <div className={css.dataBlockInfo}>
                            <div className={css.dataBlockInfoText}>
                              <span>Недостатньо даних</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={css.textBlock}>
                        <div className={css.textBlockContent}>
                          <div className={css.textBlockContentInfo}>
                            <h3>Рейтинг за відгуками</h3>
                            <p>Розраховується на основі всіх залишених вам відгуків</p>
                          </div>
                          <div className={css.textBlockContentButton}>
                            <button type="button">
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
                                    d="M10 0c5.514 0 10 4.486 10 10s-4.486 10-10 10S0
                                                                     15.514 0 10 4.486 0 10 0zm0 2c-4.411 0-8 3.589-8
                                                                      8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 12a1 1
                                                                       0 1 1 0 2 1 1 0 1 1 0-2zm.717-9.938c1.612.284
                                                                        2.937 1.608 3.22 3.221.349 1.99-.831 3.94-2.747
                                                                         4.537a.276.276 0 0 0-.19.27 1 1 0 1 1-2
                                                                          0c0-1.006.642-1.883 1.596-2.18.835-.26
                                                                           1.574-1.127 1.37-2.282-.137-.785-.81-1.458-
                                                                           1.595-1.595a1.985 1.985 0 0 0-1.656.434C8.26
                                                                            6.849 8 7.408 8 8.002a.999.999 0 1 1-2 0c0-
                                                                            1.185.52-2.302 1.429-3.065a4.022 4.022 0 0
                                                                             1 3.288-.873z"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={css.mainInfoContentBlock}>
                  <div className={css.mainInfoContentBlockWrapper}>
                    <div className={css.blockContent}>
                      <div className={css.dataBlock}>
                        <div>
                          <div>
                            <div className={css.dataBlockInfoText}>
                              <span>Недостатньо даних</span>
                            </div>
                            <div className={css.dataBlockInfoRating}>
                              <div className={css.ratingLine}>
                                <div className={css.ratingLineFiller} />
                              </div>
                            </div>
                            <div className={css.dataBlockRating}>
                              <span>
                                <div className={css.ratingLabels}>
                                  <h4>Погано</h4>
                                  <h4>Добре</h4>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={css.textBlock}>
                        <div className={css.textBlockContent}>
                          <div className={css.textBlockContentInfo}>
                            <h3>Виконання замовлень</h3>
                            <p>Розраховується на основі виконаних замовлень</p>
                          </div>
                          <div className={css.textBlockContentButton}>
                            <button type="button">
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
                                    d="M10 0c5.514 0 10 4.486 10 10s-4.486 10-10 10S0
                                                                     15.514 0 10 4.486 0 10 0zm0 2c-4.411 0-8 3.589-8
                                                                      8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 12a1 1
                                                                       0 1 1 0 2 1 1 0 1 1 0-2zm.717-9.938c1.612.284
                                                                        2.937 1.608 3.22 3.221.349 1.99-.831 3.94-2.747
                                                                         4.537a.276.276 0 0 0-.19.27 1 1 0 1 1-2
                                                                          0c0-1.006.642-1.883 1.596-2.18.835-.26
                                                                           1.574-1.127 1.37-2.282-.137-.785-.81-1.458-
                                                                           1.595-1.595a1.985 1.985 0 0 0-1.656.434C8.26
                                                                            6.849 8 7.408 8 8.002a.999.999 0 1 1-2 0c0-
                                                                            1.185.52-2.302 1.429-3.065a4.022 4.022 0 0
                                                                             1 3.288-.873z"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={css.mainInfoContentBlock}>
                  <div className={css.mainInfoContentBlockWrapper}>
                    <div className={css.blockContent}>
                      <div className={css.dataBlock}>
                        <div>
                          <div>
                            <div className={css.dataBlockInfoText}>
                              <span>Недостатньо даних</span>
                            </div>
                            <div className={css.dataBlockInfoRating}>
                              <div className={css.ratingLine}>
                                <div className={css.ratingLineFiller} />
                              </div>
                            </div>
                            <div className={css.dataBlockRating}>
                              <span>
                                <div className={css.ratingLabels}>
                                  <h4>Погано</h4>
                                  <h4>Добре</h4>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={css.textBlock}>
                        <div className={css.textBlockContent}>
                          <div className={css.textBlockContentInfo}>
                            <h3>Відповіді в чатах</h3>
                            <p>Розраховується на основі чатів з покупцем</p>
                          </div>
                          <div className={css.textBlockContentButton}>
                            <button type="button">
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
                                    d="M10 0c5.514 0 10 4.486 10 10s-4.486 10-10 10S0
                                                                     15.514 0 10 4.486 0 10 0zm0 2c-4.411 0-8 3.589-8
                                                                      8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 12a1 1
                                                                       0 1 1 0 2 1 1 0 1 1 0-2zm.717-9.938c1.612.284
                                                                        2.937 1.608 3.22 3.221.349 1.99-.831 3.94-2.747
                                                                         4.537a.276.276 0 0 0-.19.27 1 1 0 1 1-2
                                                                          0c0-1.006.642-1.883 1.596-2.18.835-.26
                                                                           1.574-1.127 1.37-2.282-.137-.785-.81-1.458-
                                                                           1.595-1.595a1.985 1.985 0 0 0-1.656.434C8.26
                                                                            6.849 8 7.408 8 8.002a.999.999 0 1 1-2 0c0-
                                                                            1.185.52-2.302 1.429-3.065a4.022 4.022 0 0
                                                                             1 3.288-.873z"
                                  />
                                </svg>
                              </span>
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
      </div>

    </section>
  </div>
);

export { MyRatingAndReviewsPage };
