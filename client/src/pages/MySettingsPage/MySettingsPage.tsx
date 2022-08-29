import React from 'react';
import { Link } from 'react-router-dom';
import css from './MySettingsPage.module.css';

const MySettingsPage = () => (
  <section className={css.mySettingsPageWrapper}>
    <div className={css.mySettingsPageItem}>
      <div className={css.mySettingsPageItemHeader}>
        <div className={css.itemHeaderTextContent}>
          <h1 className={css.itemHeaderText}>Налаштування профілю</h1>
        </div>
        <div className={css.settingsListWrapper}>
          <ul className={css.settingsList}>
            <li className={css.listItem}>
              <button type="button" className={css.listButton}>
                <div className={css.buttonContent}>
                  <h2 className={css.buttonText}>
                    Основна інформація
                  </h2>
                </div>
              </button>
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
                <h3 className={css.inputHeader}>Режим роботи у воєнний час</h3>
                <select>
                  <option value="1">Працюю під час воєнного стану</option>
                  <option value="2">Тимчасово не працюю</option>
                  <option value="3" selected>--</option>
                </select>
                <div className={css.selectInfo}>
                  <span />
                </div>
              </li>
              <li>
                <h3 className={css.inputHeader}>Адреса сторінки</h3>
                <input id="userId" name="userId" autoComplete="userId" value="id*******" />
                <div className={css.inputInfo}>
                  <span>https://izi.ua/m-2393603-id*******</span>
                </div>
              </li>
              <li>
                <h3 className={css.inputHeader}>Ім&apos;я</h3>
                <input id="firstName" name="firstName" autoComplete="firstName" value="Олена" />
                <div className={css.inputInfo}>
                  <span />
                </div>
              </li>
              <li>
                <h3 className={css.inputHeader}>Прізвище</h3>
                <input id="lastName" name="lastName" autoComplete="lastName" value="Князь" />
                <div className={css.inputInfo}>
                  <span />
                </div>
              </li>
              <li>
                <h3 className={css.inputHeader}>Змінити фото профілю</h3>
                <div className={css.changeAvatar}>
                  <label typeof="button" htmlFor="file">Завантажити
                    <input type="file" accept="image/jpeg, image/png" id="file" />
                  </label>
                </div>
                <div className={css.inputInfo}>
                  <span className={css.changeAvatarInfo}>
                    Виберіть квадратне фото не менше 200*200
                  </span>
                </div>
              </li>
              <li>
                <h3 className={css.inputHeader}>Місто</h3>
                <select>
                  <option value="1" selected>Львів</option>
                  <option value="2">Київ</option>
                  <option value="3">Одеса</option>
                  <option value="4">Тернопіль</option>
                  <option value="5">Миколаїв</option>
                  <option value="6">Луцьк</option>
                  <option value="7">Донецьк</option>
                  <option value="8">Херсон</option>
                  <option value="9" selected>--</option>
                </select>
                <div className={css.selectInfo}>
                  <span />
                </div>
              </li>
              <li>
                <h3 className={css.inputHeader}>Стать</h3>
                <select>
                  <option value="1" selected>--</option>
                  <option value="2">Жінка</option>
                  <option value="3">Чоловік</option>
                </select>
                <div className={css.selectInfo}>
                  <span />
                </div>
              </li>
              <li>
                <h3 className={css.inputHeader}>Про себе</h3>
                <textarea name="about" rows={15} placeholder="Введіть текст..." />
              </li>
              <li>
                <h3 className={css.inputHeader}>Небезпечна зона</h3>
                <div className={css.deleteAccount}>
                  <div className={css.deleteButton}>
                    <button type="button">Видалити мій профіль</button>
                  </div>
                  <p>Профіль буде видалено з гіперпростору izi.ua</p>
                </div>
              </li>
            </ul>
          </div>
        </form>
      </div>

    </div>

  </section>
);

export { MySettingsPage };
