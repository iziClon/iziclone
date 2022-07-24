import React from 'react';

import css from './AuthPage.module.css';
import { AuthForm, AuthIntroBlock } from '../../components';

const AuthPage = () => (
    <div className={css.authWrap}>
        <div className={css.authContainer}>
            <AuthIntroBlock/>
            <AuthForm/>
        </div>
    </div>
);

export { AuthPage };
