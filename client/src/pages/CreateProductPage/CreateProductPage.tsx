import React, {
  ChangeEvent, FC, useEffect, useState,
} from 'react';
import { useForm } from 'react-hook-form';
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { v4 } from 'uuid';

import { createProduct } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hook';
import { storage } from '../../firebase';
import {
  INewImage,
  IThisMyImage,
} from '../../interfaces';
import css from './CreateProductPage.module.css';

const CreateProductPage: FC = () => {
  const [images, setImages] = useState([] as File[]);

  const [myImages, setMyImages] = useState([] as string[]);

  const [imageList, setImageList] = useState([] as string[]);
  console.log(imageList[100]);

  const imageListRef = ref(storage, 'images/');

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const files = target.files as FileList | null;
    if (files) {
      for (let i = 0; i < files.length; i += 1) {
        const newImage = files[i] as INewImage;
        newImage.id = Math.random();
        setImages((prevState) => [...prevState, newImage]);
      }
    }
  };

  const addImage = () => {
    const promises = [];
    const changeImages = [] as string[];
    images.forEach((image) => {
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

  const deleteImage = (thisMyImage: IThisMyImage) => {
    const result = myImages.filter((word) => word !== thisMyImage.myImage);
    setMyImages([...result]);

    const pictureRef = ref(storage, thisMyImage.myImage);
    deleteObject(pictureRef)
      .then(() => {
        alert('Picture is deleted successfully!');
      })
      .catch((err) => {
        console.log(err);
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

  const { user } = useAppSelector((state) => state.auth);

  categories.map((category) => category);

  const dispatch = useAppDispatch();
  const submitProduct = async (productSubmit : any) => {
    let fullProduct = productSubmit;
    fullProduct = {
      product: {
        categoryId: +fullProduct.categoryId,
        userId: user?.id as number,
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
              <div className={css.allImage}>
                {myImages.map((myImage) => (
                  <div className={css.oneImage} key={myImage}>
                    <img className={css.myImage} src={myImage} alt="" />
                    <button className={css.buttonImage} type="button" onClick={() => deleteImage({ myImage })}>
                      Видалити фото
                    </button>
                  </div>
                ))}
              </div>

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
              Зробіть не менше 3-ох фотографій на телефон з різних ракурсів у звичайній обстановці.
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
