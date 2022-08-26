import React from 'react';
import { Link } from 'react-router-dom';

import css from './MyContactInfoPage.module.css';


const MyContactInfoPage = () => (
  <section className={css.mySettingsPageWrapper}>
    <div className={css.mySettingsPageItem}>
      <div className={css.mySettingsPageItemHeader}>
        <div className={css.itemHeaderTextContent}>
          <h1 className={css.itemHeaderText}>Налаштування профілю</h1>
        </div>
        <div className={css.settingsListWrapper}>
          <ul className={css.settingsList}>
            <li className={css.listItem}>
              <Link to="/my/settings" className={css.listButton}>
                <div className={css.buttonContent}>
                  <h2 className={css.buttonText}>
                    Основна інформація
                  </h2>
                </div>
              </Link>
            </li>
            <li className={css.listItem}>
              <Link to="contact-info" className={css.listButton}>
                <div className={css.buttonContent}>
                  <h2 className={css.buttonText}>
                    Контактна інформація
                  </h2>
                </div>
              </Link>
            </li>
            <li className={css.listItem}>
              <button type="button" className={css.listButton}>
                <div className={css.buttonContent}>
                  <h2 className={css.buttonText}>
                    Тип профіля
                  </h2>
                </div>
              </button>
            </li>
            <li className={css.listItem}>
              <button type="button" className={css.listButton}>
                <div className={css.buttonContent}>
                  <h2 className={css.buttonText}>
                    Доставка та оплата
                  </h2>
                </div>
              </button>
            </li>
            <li className={css.listItem}>
              <button type="button" className={css.listButton}>
                <div className={css.buttonContent}>
                  <h2 className={css.buttonText}>
                    Сповіщення
                  </h2>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.mainContent}>
        <form>
          <div className={css.formWrapper}>
            <ul className={css.formList}>
              <li>
                <h3 className={css.inputHeader}>E-mail</h3>
                <input name="email" autoComplete="email" placeholder="Введіть email" />
                <div className={css.inputInfo}>
                  <span />
                </div>
              </li>
              <li>
                <h3 className={css.inputHeader}>Номер телефону</h3>
                <input name="phone" placeholder="+380XXXXXXXXX" />
                <div className={css.inputInfo}>
                  <span />
                </div>
              </li>
            </ul>
          </div>
        </form>
      </div>

    </div>

  </section>
);

export { MyContactInfoPage };
