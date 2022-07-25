import React from 'react';

import css from './AuthIntroBlock.module.css';

const AuthIntroBlock = () => (
  <div className={css.authIntroList}>
    <div className={css.authIntroItem}>
      <img
        src="https://izi.ua/cloud-cgi/static/izi-static/build/images/import-2sn1M.svg"
        alt="Import"
      />
      <p>
        <span>Імпорт</span> з інших
        майданчиків в 1 клік
      </p>
    </div>
    <div className={css.authIntroItem}>
      <img
        src="https://izi.ua/cloud-cgi/static/izi-static/build/images/delivery-2sJPy.svg"
        alt="Save"
      />
      <p>
        <span>Безпечна</span> купівля
        та продаж
      </p>
    </div>
    <div className={css.authIntroItem}>
      <img
        src="https://izi.ua/cloud-cgi/static/izi-static/build/images/goods-3jtKO.svg"
        alt="Free"
      />
      <p>
        <span>Безкоштовні і безлімітні</span> оголошення
      </p>
    </div>
    <div className={css.border} />
  </div>
);

export { AuthIntroBlock };
