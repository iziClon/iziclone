/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from 'firebase/storage';
import { v4 } from 'uuid';

import { createProduct } from '../../store';
import { useAppSelector } from '../../hook';
import { storage } from '../../firebase';
import css from './CreateProductPage.module.css';

const CreateProductPage: FC = () => {
  const [image, setImage] = useState(null);

  const [imageList, setImageList] = useState([] as string[]);

  const [myImage, setMyImage] = useState('');

  const imageListRef = ref(storage, 'images/');

  const addImage = () => {
    if (image == null) return;
    if (imageList == null) return;
    const imageRef = ref(storage, `images/${image + v4()}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
        setMyImage((prev) => url);
      });
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const {
    handleSubmit, register, reset,
  } = useForm();

  const { categories } = useAppSelector((state) => state.categories);

  categories.map((category) => category);

  const dispatch = useDispatch();

  const submit = (product: any) => {
    product = {
      categoryId: +product.categoryId,
      userId: +product.userId,
      price: +product.price,
      year: +product.year,
      title: product.title,
      description: product.description,
      status: product.status,
      image: myImage,
    };
    console.log(product, 'product');

    // @ts-ignore
    dispatch(createProduct(product));
    reset();
  };

  return (
    <div className={css.createProduct}>

      <div className={css.header}>
        <h1>Подача оголошення</h1>
      </div>

      <div className={css.formAndDescription}>

        <div className={css.productForm}>

          <form onSubmit={handleSubmit(submit)}>

            <div className={css.imageBox}>

              <div className={css.labelImage}>ФотографіЇ * :</div>

              <div>
                <img className={css.myImage} src={myImage} alt="" />
              </div>

              <div className={css.divInputImage}>

                <input
                  className={css.inputImage}
                  id="image"
                  type="file"
                  {...register('image')}
                  onChange={(event) => {
                    // @ts-ignore
                    setImage(event.target.files[0]);
                  }}
                />

                <button className={css.addImage} onClick={addImage} type="button">Додати фото</button>

              </div>

            </div>

            <label className={css.label} htmlFor="categoryId">Категорія * :

              <select className={css.input} id="categoryId" {...register('categoryId')}>
                {categories.map((category) => (
                  <option value={category.id}>{category.nameCategory}</option>))}
              </select>

            </label>

            <label className={css.label} htmlFor="userId">UserId * :
              <input className={css.input} id="userId" type="number" {...register('userId')} />
            </label>

            <label className={css.label} htmlFor="title">Назва товару * :
              <input className={css.input} id="title" type="text" {...register('title')} />
            </label>

            <label className={css.label} htmlFor="description">Опис товару * :
              <input className={css.input} id="description" type="text" {...register('description')} />
            </label>

            <label className={css.label} htmlFor="price">Ціна товару або послуги * :
              <input className={css.input} id="price" type="number" {...register('price')} />
            </label>

            <label className={css.label} htmlFor="year">Рік випуску :
              <input className={css.input} id="year" type="number" {...register('year')} />
            </label>

            <label className={css.label} htmlFor="status">Status :
              <input className={css.inputStatus} id="status" type="checkbox" {...register('status')} />
            </label>

            <button className={css.buttonForm}>Опублікувати</button>
            {/*<button className={css.buttonForm} type="submit">Опублікувати</button>*/}

          </form>

        </div>

        <div className={css.rules}>

          <div>
            <h1 className={css.headerDescription}>Як сфотографувати товар?</h1>
            <p>
              Зробіть одну фотографію на телефон з різних ракурсів у звичайній обстановці.
              Для покупців важливіше не краса фото, а реальний стан речей.
            </p>
          </div>

          <div>
            <h1 className={css.headerDescription}>Яку ціну поставити?</h1>
            <p>
              В середньому, при продажу з рук ставлять ціну зі знижкою від 20% до 50% від вартості
              нового товару залежно від його стану.
            </p>
          </div>

          <div>
            <h1 className={css.headerDescription}>Як описати товар?</h1>
            <p>
              Напишіть причину продажу товару, як і скільки ним користувались. Розкажіть про свої
              враження і рекомендації майбутньому власнику.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export { CreateProductPage };
