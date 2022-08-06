import React, { FC, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';

import { productService } from '../../services';
import { IProduct } from '../../interfaces';
import css from './ProductDetaids.module.css';
import 'react-multi-carousel/lib/styles.css';


const ProductDetails: FC = () => {
  const [product, setProduct] = useState<IProduct>();
  const { state }: any = useLocation();

  const { productId }: any = useParams();


  useEffect(() => {
    if (state) {
      setProduct(state);
    }
    productService.getProductById(productId).then((value) => setProduct(value));
  }, [productId]);


  const responsiveMain = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      paritialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 40,

    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      paritialVisibilityGutter: 40,

    },
  };

  const responsiveSmall = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      paritialVisibilityGutter: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,

    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={css.container}>

      <div className={css.container_header}>

        <div className={css.container_image}>
          <Carousel
            responsive={responsiveMain}
            partialVisbile
            swipeable={false}
            draggable={false}
            infinite
            ssr
          >
            <div className={css.carousel_image} style={{ backgroundImage: `url(${product?.image})` }} />
            <div className={css.carousel_image} style={{ backgroundImage: `url(${product?.image})` }} />
            <div className={css.carousel_image} style={{ backgroundImage: `url(${product?.image})` }} />
            <div className={css.carousel_image} style={{ backgroundImage: `url(${product?.image})` }} />

          </Carousel>
        </div>


        <div className={css.title}>

          <h2>{product?.title}</h2>
          <h4>Опубліковано 26.07.2022</h4>
          <h3>{product?.price} ₴</h3>

          <div style={{ marginLeft: '-40px' }}>
            <Carousel
              responsive={responsiveSmall}
              partialVisbile
              infinite
              swipeable={false}
              draggable={false}
            >
              <div className={css.smallSlider}>
                <div>
                  <img
                    src="https://izi.ua/cloud-cgi/static/izi-static/build/images/seller-is-working-1XLK0.svg"
                    alt="Saller"
                    style={{ width: '30px', height: '30px' }}
                  />
                </div>
                <div className={css.smallSlider_box}>
                  <h2>Продавець працює</h2>
                  <h3>Можна робити замовлення під час війни</h3>
                </div>
              </div>
              <div className={css.smallSlider}>
                <div>
                  <img
                    src="https://izi.ua/cloud-cgi/static/izi-static/build/images/card-3un8_.svg"
                    alt="Buy"
                    style={{ width: '30px', height: '30px' }}
                  />
                </div>
                <div className={css.smallSlider_box}>
                  <h2>Купуй безкоштовно</h2>
                  <h3>Повернемо гроші,якщо товар не підійде</h3>
                </div>

              </div>
              <div className={css.smallSlider}>
                <div>
                  <img
                    src="https://izi.ua/cloud-cgi/static/izi-static/build/images/ukrposhta-z1Ic_.svg"
                    alt="Send"
                    style={{ width: '30px', height: '30px' }}
                  />
                </div>
                <div className={css.smallSlider_box}>
                  <h2>Укрпошта 25₴</h2>
                  <h3>Спеціальні тарифи для користувачів ІЗІ</h3>
                </div>

              </div>
            </Carousel>
          </div>
          <div className={css.address}>
            <img src="https://cdn-icons-png.flaticon.com/128/149/149060.png" alt="location" />
            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}>
              <h4>Розташування:</h4>
              <h5>Львів</h5>
            </div>

          </div>


          <button type="submit" className={css.button_buy}>Купити</button>
          <button type="submit" className={css.button_write}>Написати продавцеві</button>

          <div className={css.user}>
            <div className={css.user_header}>
              <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt="user" />
              <div style={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}>
                <h2>Василь</h2>
                <h4>Був 15 хв. назад</h4>
                <h5>З ІZICLONE 340 днів</h5>
              </div>

            </div>
            <div className={css.user_bottom}>
              <a href="/ds">Переглянути усі оголошення</a>
            </div>
          </div>
        </div>

      </div>

      <div className={css.bottom}>
        <h2>Опис</h2>
        <h4>{product?.description}</h4>
      </div>

    </div>


  );
};

export { ProductDetails };
