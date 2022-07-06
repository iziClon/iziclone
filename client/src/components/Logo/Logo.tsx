import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import css from './Logo.module.css';

const Logo: FC = () => (
  <Link to="/">
    <div className={css.logo}>iziClone</div>
  </Link>
);

export { Logo };
