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
  // const [myImage, setMyImage] = useState(null);
  const [image, setImage] = useState(null);
  const [imageList, setImageList] = useState([]);

  // const handleChange = (e: any) => {
  //   if (e.target.files[0]) {
  //     setMyImage(e.target.files[0]);
  //   }
  // };

  const imageListRef = ref(storage, 'images/');

  const addImage = () => {
    if (image == null) return;
    const imageRef = ref(storage, `images/${image + v4()}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        // @ts-ignore
        setImageList((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          // @ts-ignore
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  // console.log(image,'image')
  // console.log(myImage,'myImage')
  // console.log(imageList,'imageList')

  const {
    handleSubmit, register, reset,
  } = useForm();

  const { categories } = useAppSelector((state) => state.categories);

  categories.map((category) => category);

  const dispatch = useDispatch();

  const submit = (product: any) => {
    // @ts-ignore
    dispatch(createProduct(product));
    reset();
  };

  return (
    <div>
      <h1>Подати оголошення</h1>
      <form onSubmit={handleSubmit(submit)} className={css.productForm}>
        <input type="file"
               onChange={(event) => {
          // @ts-ignore
                 setImage(event.target.files[0])
        }} />

        <button onClick={addImage} type="button">Додати фото</button>

        {imageList.map((url) => <img className={css.myImage} src={url} alt="image" />)}

        <label>Категорія * :
          <select id="categoryId" {...register('categoryId')}>
            {categories.map((category) => (<option value={category.id}>{category.nameCategory}</option>))}
          </select>
        </label>

        <br />

        <label>UserId * : <input type="number" {...register('userId')} /></label>

        <label>Назва товару * : <input type="text" {...register('title')} /></label>

        <label>Опис товару * : <input type="text" {...register('description')} /></label>

        <label>Ціна товару або послуги * : <input type="number" {...register('price')} /></label>

        <label>Рік випуску : <input type="number" {...register('year')} /></label>

        <label>Status : <input type="checkbox" {...register('status')} /></label>
        {/* <label>Image : <input type="text" {...register('image')} value="asdfghj" /></label> */}
        <button>Подати оголошення</button>
      </form>
    </div>
  );
};

export { CreateProductPage };
