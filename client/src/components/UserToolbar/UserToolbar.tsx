import React, { useState } from 'react';

import css from './UserToolbar.module.css';
import { logoutUser } from '../../store';
import { useAppDispatch } from '../../hook';

const UserToolbar = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const showModal = () => setIsShow(!isShow);
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(logoutUser());
  };
  return (
    <div role="presentation" onClick={showModal} className={css.userAvatar}>
      <img src="https://avatars.izi.ua/2348107" alt="Avatar" />
      {
                isShow && (
                <div className={css.userToolBar}>
                  <span className={css.topBot} />
                  <span className={`${css.topBot}, ${css.topBotBorder}`} />
                  <div role="presentation" onClick={logout}>
                    <svg
                      className="SvgIcon__vAlignTop--kHMXt"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19,20H6V4H19a.9.9,0,0,0,1-1,.9.9,0,0,0-1-1H5A.9.9,0,0,0,4,3V21a.9.9,0,0,0,1,1H19a1,1,0,0,0,0-2Z"
                      />
                      <path
                        fill="currentColor"
                        d="M15.9,7.5a1,1,0,1,0-1.4,1.4L16.6,11H10a1,1,0,0,0,0,2h6.6l-2.1,2.1a1,1,0,0,0,0,1.4.9.9,0,0,0,.7.3,1.1,1.1,0,0,0,.7-.3l3.8-3.8a1,1,0,0,0,0-1.4Z"
                      />
                    </svg>
                    <p>Вийти</p>
                  </div>
                </div>
                )
            }
    </div>
  );
};

export { UserToolbar };
