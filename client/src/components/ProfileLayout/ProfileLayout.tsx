import React, { FC } from 'react';

import { NavLink, Outlet } from 'react-router-dom';
import css from './ProfileLayout.module.css';

const ProfileLayout: FC = () => (
  <section className={css.wrapper}>
    <aside className={css.profileLayoutAside}>
      <div className={css.cabinetSidebar}>
        <div className={css.cabinetSidebarContent}>
          <div className={css.sidebarHeader}>
            <div className={css.headerContent}>
              <div className={css.userAvatar}>
                <img src="https://avatars.izi.ua/2348107" alt="Avatar" />
              </div>
              <span>Username</span>
              <div className={css.userAdvertisementWrapper}>
                <div className={css.userAdvertisement} />
                <div className={css.userAdvertisementInfo}>Оголошень: 0 з 10</div>
              </div>
            </div>
          </div>
          <div className={css.userToolBar}>

            <NavLink to="products">
              <div>
                <svg
                  className="SvgIcon__vAlignTop--kHMXt"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6 20h12V4H6v16zM19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14zm-9 7a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2h-4zm0 4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2h-4zm0 4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2h-4z"
                  />
                </svg>
                <p>Мої оголошення</p>
              </div>
            </NavLink>

            <NavLink to="sales">
              <div>
                <svg
                  className="SvgIcon__vAlignTop--kHMXt"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m21.926 8.544-3.074-6C18.68 2.21 18.337 2 17.962 2H5.96196c-.379 0-.725.214-.895.553l-3 6c-.103.208-.068 1.447-.068 1.447 0 1.474.81 2.75 2 3.444v5.894c0 1.468 1.194 2.662 2.662 2.662H17.337c1.468 0 2.662-1.194 2.662-2.662v-5.894c1.19-.694 2-1.97 2-3.444 0 0 .043-1.229-.073-1.456ZM6.57996 4H17.351L19.4 8H4.57996l2-4Zm7.41904 6c0 1.103-.897 2-2 2s-2.00005-.897-2.00005-2H13.999ZM3.99896 10h4c0 1.103-.897 2-2 2s-2-.897-2-2ZM17.999 19.338c0 .359-.303.662-.662.662H6.66096c-.359 0-.662-.303-.662-.662V14c1.20099 0 2.266-.542 3-1.382.734.84 1.79904 1.382 3.00004 1.382 1.201 0 2.266-.542 3-1.382.734.84 1.799 1.382 3 1.382v5.338Zm0-7.338c-1.103 0-2-.897-2-2h4c0 1.103-.898 2-2 2Z"
                  />
                </svg>
                <p>Продажі</p>
              </div>
            </NavLink>
            <NavLink to="purchases">
              <div>
                <svg
                  className="SvgIcon__vAlignTop--kHMXt"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18.9782 6.791c-.002-.008-.007-.014-.009-.021-.011-.045-.034-.082-.05-.124-.028-.073-.057-.145-.101-.208-.026-.038-.059-.068-.091-.103-.051-.056-.103-.106-.165-.149-.039-.027-.08-.048-.123-.069-.07-.035-.141-.06-.219-.078-.028-.006-.05-.024-.079-.028-.021-.003-.04.005-.061.004-.027-.003-.052-.015-.08-.015h-3v-.5c0-1.93-1.57-3.5-3.5-3.5-1.92996 0-3.49996 1.57-3.49996 3.5V6h-3c-.498 0-.92.366-.99.858l-2 14c-.041.287.045.578.234.797.191.219.466.345.756.345H21.0002c.302 0 .588-.136.777-.371.19-.235.264-.543.2-.838l-2.999-14ZM10.0002 5.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5V6h-3v-.5ZM5.86724 8h2.133v1c0 .552.447 1 1 1 .553 0 .99996-.448.99996-1V8h3v1c0 .552.447 1 1 1 .553 0 1-.448 1-1V8h1.847l-1.714 12H4.15424l1.713-12ZM17.1542 20l1.044-7.306L19.7632 20h-2.609Z"
                  />
                </svg>
                <p>Покупки</p>
              </div>
            </NavLink>
            <NavLink to="rating-and-reviews">
              <div>
                <svg
                  className="SvgIcon__vAlignTop--kHMXt"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20.216 10.986l-2.66 8.642a1.209 1.209 0 0 1-1.231.846L8 19.921V9.918a7.006 7.006 0 0 0 3.887-3.428l1.096-2.146 1.336.682c.354.18.618.49.742.873a1.49 1.49 0 0 1-.088 1.144l-.661 1.295a.998.998 0 0 0 .046.99c.188.3.527.467.875.465l3.984-.12c.322-.035.636.135.837.399.2.263.26.595.162.912zM6 19.785l-2-.133v-9.148l2-.179v9.46zM21.645 8.86c-.59-.77-1.53-1.19-2.49-1.186l-2.302.072a3.475 3.475 0 0 0 .11-2.46 3.474 3.474 0 0 0-1.735-2.04L13 2.108a1.013 1.013 0 0 0-.764-.06 1.008 1.008 0 0 0-.582.498l-1.55 3.036a5.018 5.018 0 0 1-4.047 2.731l-3.147.28A1.001 1.001 0 0 0 2 9.588v11c0 .527.408.963.934.998l13.259.884a3.19 3.19 0 0 0 3.276-2.256l2.659-8.642a3.023 3.023 0 0 0-.483-2.713z"
                  />
                </svg>
                <p>Рейтинг та відгуки</p>
              </div>
            </NavLink>
            <NavLink to="wallet-balance">
              <div>
                <svg
                  className="SvgIcon__vAlignTop--kHMXt"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fillRule="evenodd" transform="translate(2 4)">
                    <mask id="b" fill="#fff">
                      <path
                        d="M17 14c.552 0 1-.449 1-1V6H2v7c0 .551.448 1 1 1h14zM3 2c-.552 0-1 .449-1 1v1h16V3c0-.551-.448-1-1-1H3zm14-2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H3c-1.654 0-3-1.346-3-3V3c0-1.654 1.346-3 3-3h14zM8 9a2 2 0 0 1 0 4 1.987 1.987 0 0 1-1.5-.69c-.366.419-.899.69-1.5.69a2 2 0 0 1 0-4c.601 0 1.134.271 1.5.69C6.866 9.271 7.399 9 8 9z"
                      />
                    </mask>
                    <g fill="currentColor" mask="url(#b)">
                      <path d="M-2-4h24v24H-2z" />
                    </g>
                  </g>
                </svg>
                <p>Гаманець</p>
              </div>
            </NavLink>
            <NavLink to="favourites">
              <div>
                <svg
                  className="SvgIcon__vAlignTop--kHMXt"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12.012 21.002c-.162 0-.323-.04-.47-.118C11.15 20.676 2 15.716 2 8.716c0-3.15 2.694-5.714 6.006-5.714 1.502 0 2.912.526 4.006 1.472a6.141 6.141 0 0 1 4.568-1.447C19.72 3.309 22 5.889 22 9.162c0 6.682-9.137 11.523-9.526 11.726a1.018 1.018 0 0 1-.462.114m-4.006-16C5.796 5.002 4 6.668 4 8.716c0 5 6.242 9.078 8.018 10.136C13.794 17.82 20 13.874 20 9.162c0-2.214-1.514-3.956-3.6-4.143-1.404-.128-2.754.441-3.604 1.515-.38.48-1.19.48-1.568 0-.77-.974-1.945-1.532-3.222-1.532"
                  />
                </svg>
                <p>Обране</p>
              </div>
            </NavLink>
            <NavLink to="settings">
              <div>
                <svg
                  className="SvgIcon__vAlignTop--kHMXt"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 12.792v-1.584c.001-.063-.034-.103-.088-.111l-1.264-.214a1.002 1.002 0 0 1-.788-.69 6.14 6.14 0 0 0-.436-1.055.996.996 0 0 1 .07-1.049l.744-1.041a.107.107 0 0 0-.009-.141l-1.125-1.125-.141-.012-1.046.745a.999.999 0 0 1-1.048.069 5.995 5.995 0 0 0-1.09-.449 1.003 1.003 0 0 1-.699-.791l-.211-1.248A.11.11 0 0 0 12.758 4h-1.583a.111.111 0 0 0-.113.095l-.218 1.28a.999.999 0 0 1-.687.786c-.36.113-.712.262-1.045.442-.338.18-.749.156-1.06-.069l-1.034-.745c-.002.003-.14.016-.142.018l-1.124 1.12a.112.112 0 0 0-.013.144l.752 1.057c.219.307.246.71.072 1.043a6.042 6.042 0 0 0-.429 1.055c-.11.364-.416.634-.79.698l-1.248.211a.11.11 0 0 0-.096.111v1.583c0 .057.038.103.094.111l1.282.22c.37.064.673.328.785.687.113.36.262.712.442 1.045a1 1 0 0 1-.069 1.059l-.741 1.03a.11.11 0 0 0 .013.139l1.124 1.124.141.013 1.057-.752a1 1 0 0 1 1.045-.071c.313.165.657.305 1.021.419a1 1 0 0 1 .689.791l.21 1.263a.11.11 0 0 0 .112.093h1.586a.11.11 0 0 0 .112-.095l.214-1.264a1 1 0 0 1 .69-.788 6.17 6.17 0 0 0 1.053-.437 1 1 0 0 1 1.051.07l1.042.745.851.694-.707-.707 1.121-1.121a.114.114 0 0 0 .012-.146l-.745-1.044a1.002 1.002 0 0 1-.071-1.045c.186-.353.332-.708.437-1.052a1 1 0 0 1 .793-.697l1.263-.21a.11.11 0 0 0 .093-.111zm.246-3.668A2.09 2.09 0 0 1 22 11.223v1.569a2.108 2.108 0 0 1-1.762 2.084l-.683.113-.099.237.403.564a2.11 2.11 0 0 1-.226 2.72l-1.122 1.122c-.721.716-1.907.81-2.722.226l-.561-.401-.237.098-.115.683A2.11 2.11 0 0 1 12.791 22h-1.586a2.11 2.11 0 0 1-2.085-1.763l-.113-.683a13.004 13.004 0 0 1-.195-.08l-.581.412c-.816.585-2.003.486-2.715-.228l-1.121-1.121a2.102 2.102 0 0 1-.228-2.72l.395-.548a7.944 7.944 0 0 1-.099-.237l-.703-.12A2.105 2.105 0 0 1 2 12.829v-1.583c0-1.037.742-1.913 1.764-2.084l.662-.111a8.5 8.5 0 0 1 .096-.239l-.412-.581a2.106 2.106 0 0 1 .229-2.719l1.125-1.121c.691-.706 1.9-.814 2.721-.227l.551.398c.077-.035.156-.067.235-.099l.12-.702A2.108 2.108 0 0 1 11.175 2h1.583c1.037 0 1.913.742 2.084 1.764l.112.662c.095.037.19.076.283.117l.566-.402c.808-.581 1.998-.487 2.714.225l1.122 1.123a2.1 2.1 0 0 1 .227 2.721l-.402.561c.034.079.066.158.099.238l.683.115zM12 14c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2zm0-6c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"
                  />
                </svg>
                <p>Налаштування</p>
              </div>
            </NavLink>
            <div>
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
        </div>
      </div>
    </aside>
    <main>
      <Outlet />
    </main>
  </section>
);
export { ProfileLayout };
