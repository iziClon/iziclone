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
  console.log(myImage, 'myimage');

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
    <div>
      <h1>Подати оголошення</h1>
      <form onSubmit={handleSubmit(submit)} className={css.productForm}>
        <input
          type="file"
          {...register('image')}
          onChange={(event) => {
            // @ts-ignore
            setImage(event.target.files[0]);
          }}
        />

        <button onClick={addImage} type="button">Додати фото</button>

        <img className={css.myImage} src={myImage} alt="" />

        <label htmlFor="categoryId">Категорія * :
          <select id="categoryId" {...register('categoryId')}>
            {categories.map((category) => (
              <option value={category.id}>{category.nameCategory}</option>))}
          </select>
        </label>

        <br />

        <label htmlFor="userId">UserId * : <input id="userId" type="number" {...register('userId')} /></label>

        <label htmlFor="title">Назва товару * : <input id="title" type="text" {...register('title')} /></label>

        <label htmlFor="description">Опис товару * : <input id="description" type="text" {...register('description')} /></label>

        <label htmlFor="price">Ціна товару або послуги * : <input id="price" type="number" {...register('price')} /></label>

        <label htmlFor="year">Рік випуску : <input id="year" type="number" {...register('year')} /></label>

        <label htmlFor="status">Status : <input id="status" type="checkbox" {...register('status')} /></label>
        {/* <label>Image : <input type="text" {...register('image')} value="asdfghj" /></label> */}
        <button type="button">Подати оголошення</button>
      </form>
    </div>
  );
};

export { CreateProductPage };
