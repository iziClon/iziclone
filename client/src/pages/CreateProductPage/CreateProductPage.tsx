/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from 'firebase/storage';
import { v4 } from 'uuid';

// import { useLocation } from 'react-router-dom';
import { createProduct } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hook';
import { storage } from '../../firebase';
import css from './CreateProductPage.module.css';

const CreateProductPage: FC = () => {
  const [images, setImages] = useState([] as File[]);

  const [myImages, setMyImages] = useState([] as string[]);

  const [imageList, setImageList] = useState([] as string[]);

  const imageListRef = ref(storage, 'images/');

  const handleChange = (e: any) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage.id = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const addImage = () => {
    const promises = [] as any[];
    const changeImages = [] as string[];
    images.map((image) => {
      const imageRef = ref(storage, `images/${image + v4()}`);
      uploadBytes(imageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          changeImages.push(url);
          setMyImages([...changeImages]);
        });
      });
      promises.push(imageRef);
    });
  };

  const deleteImage = (thisMyImage: any) => {
    const result = myImages.filter((word) => word != thisMyImage.myImage);
    setMyImages([...result]);
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

  const { user } = useAppSelector((state) => state.auth);

  categories.map((category) => category);

  const dispatch = useAppDispatch();
  const submitProduct = async (fullProduct: any) => {
    fullProduct = {
      product: {
        categoryId: +fullProduct.categoryId,
        userId: user?.id,
        price: +fullProduct.price,
        year: +fullProduct.year,
        title: fullProduct.title,
        description: fullProduct.description,
        status: false,
      },
      images: myImages,
    };
    dispatch(createProduct(fullProduct));
    reset();
  };

  return (
    <div className={css.createProduct}>

      <div className={css.header}>
        <h1>Подача оголошення</h1>
      </div>

      <div className={css.formAndDescription}>

        <div className={css.productForm}>

          <form onSubmit={handleSubmit(submitProduct)}>

            <div className={css.imageBox}>

              <div className={css.labelImage}>ФотографіЇ * :</div>

              {myImages.map((myImage) => (
                <div id="boxImage">
                  <img className={css.myImage} src={myImage} alt="" />
                  <button type="button" onClick={() => deleteImage({ myImage })}>
                    Видалити фото
                  </button>
                </div>
              ))}

              <div className={css.divInputImage}>

                <input
                  className={css.inputImage}
                  id="image"
                  type="file"
                  {...register('image')}
                  multiple
                  onChange={handleChange}
                />

                <button className={css.addImage} onClick={addImage} type="button">Додати фото</button>

              </div>

            </div>

            <label className={css.label} htmlFor="categoryId">Категорія * :

              <select className={css.input} id="categoryId" {...register('categoryId')}>
                {categories.map((category) => (
                  <option value={category.id} key={category.id}>{category.nameCategory}</option>))}
              </select>

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

            <button className={css.buttonForm} type="submit">Опублікувати</button>

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
