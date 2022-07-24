import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { useAppDispatch, useAppSelector } from '../../hook';
import { getAllProductsByCategory } from '../../store';
import css from '../HomePage/HomePage.module.css';
import style from './CategoryPage.module.css';
import { ProductCardComponent } from '../../components';

const CategoryPage: FC = () => {
  const { productsByCategory } = useAppSelector((state) => state.productsByCategory);
  const { categories } = useAppSelector((state) => state.categories);

  const dispatch = useAppDispatch();

  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(getAllProductsByCategory(+categoryId!));
  }, [categoryId]);

  return (
    <div>
      <div className={style.header}>
        {categories && categories.map((category) => {
          let name;
          if (category.id === Number(categoryId)) {
            name = category.nameCategory;
          }
          return <h1 className={style.title}>{name}</h1>;
        })}
        <span className={style.advAmount}>  {productsByCategory.length} оголошення</span>
      </div>
      <div className={style.wrapper}>
        <aside className={style.sidebar}>
          <div>
            <ul>
              <li className={style.listItem}>
                <ul>
                  <li>
                    <div className={style.boxForFilterTitle}>
                      <div className={style.filterTitle}>Ціна, ₴</div>
                      <div>
                        <FontAwesomeIcon icon={faAngleRight} className={css.filterArrow} />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={style.filterPriceContainer}>
                      <div className={style.priceInputBox}>
                        <input name="priceGte" type="number" className={style.price} />
                      </div>
                      <div className={style.space}>-</div>
                      <div className={style.priceInputBox}>
                        <input name="priceLte" type="number" className={style.price} />
                      </div>
                      <div className={style.priceBtn}>
                        <button type="button" className={style.filterByPriceBtn}>
                          <FontAwesomeIcon icon={faCheck} className={style.priceBtnIcon} />
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>
        <div className={style.main}>
          <div className={style.sortBy}>
            <div className={style.sortByBtns}>
              <button className={style.sortBtn} type="button">По релевантності</button>
              <button className={style.sortBtn} type="button">За датою</button>
              <button className={style.sortBtn} type="button">Дешеві</button>
              <button className={style.sortBtn} type="button">Дорогі</button>
            </div>
          </div>
          <div className={style.categoryWrapper}>
            <div>
              <div className={css.products}>{productsByCategory.map(
                (productByCategory) => (
                  <ProductCardComponent
                    key={productByCategory.id}
                    product={productByCategory}
                  />
                ),
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CategoryPage };
