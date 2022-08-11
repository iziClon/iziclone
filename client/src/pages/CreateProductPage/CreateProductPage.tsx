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

import { createImage, createProduct, getAllProducts } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hook';
import { storage } from '../../firebase';
import css from './CreateProductPage.module.css';
import { IImage } from '../../interfaces';
import { productService } from '../../services';

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
    images.map((image) => {
      const imageRef = ref(storage, `images/${image + v4()}`);
      uploadBytes(imageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setMyImages((prev) => [...prev, url]);
        });
      });
      promises.push(imageRef);
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

    // myImages.map((myImage) => {
    //   const newImage = {
    //     productId: product.id,
    //     imageRef: myImage,
    //   };
    //   dispatch(createImage(newImage));

    // console.log(newImage, 'image');
    reset();
  };

  // const submitProduct = async (product: any) => {
  //   product = {
  //     categoryId: +product.categoryId,
  //     userId: user?.id,
  //     price: +product.price,
  //     year: +product.year,
  //     title: product.title,
  //     description: product.description,
  //     status: false,
  //   };
  //   dispatch(createProduct(product));
  //
  //   const { products } = useAppSelector((state) => state.products);
  //   console.log(products);
  //   const lastElement = products[products.length - 1].id;
  //
  //   const productId = lastElement + 1;
  //   console.log(productId,'id');
  //   myImages.map((myImage) => {
  //     const newImage = {
  //       productId: productId,
  //       imageRef: myImage,
  //     };
  //     dispatch(createImage(newImage));
  //     console.log(newImage, 'image');
  //   });
  //   reset();
  // };

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

              <div>
                {myImages.map((myImage) => <img className={css.myImage} src={myImage} alt="" />)}
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




  // const [image, setImage] = useState<File | null>(null);
  //   console.log(image,'image');
  //
  //   const [imageList, setImageList] = useState([] as string[]);
  //
  //   const [myImage, setMyImage] = useState('');
  //   console.log(myImage,'myImage');
  //
  //   const imageListRef = ref(storage, 'images/');
  //
  //   // const { products } = useAppSelector((state) => state.products);
  // //
  // // const lastElement = products[products.length - 1].id;
  // //
  // // const productId = lastElement + 1;
  // //
  // // const newImage = {
  // //   productId,
  // //   imageRef: myImage,
  // // };
  //
  // const addImage = () => {
  //   if (image == null) return;
  //   if (imageList == null) return;
  //
  //   const imageRef = ref(storage, `images/${image + v4()}`);
  //     console.log(imageRef,'ref');
  //   uploadBytes(imageRef, image).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImageList((prev) => [...prev, url]);
  //       setMyImage(() => url);
  //       // dispatch(createImage(image));
  //     });
  //   });
  // };
  //
  // useEffect(() => {
  //   listAll(imageListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);
  //
  // const {
  //   handleSubmit, register, reset,
  // } = useForm();
  //
  // const { categories } = useAppSelector((state) => state.categories);
  //
  // const { user } = useAppSelector((state) => state.auth);
  //
  // categories.map((category) => category);
  //
  // const dispatch = useAppDispatch();
  //
  // const submit = (product: any) => {
  //   product = {
  //     categoryId: product.categoryId as number,
  //     userId: user?.id,
  //     price: product.price as number,
  //     year: product.year as number,
  //     title: product.title,
  //     description: product.description,
  //     status: false,
  //   };
  //
  //   dispatch(createProduct(product));
  //   reset();
  // };
  //
  //   return (
  //   <div className={css.createProduct}>
  //
  //     <div className={css.header}>
  //       <h1>Подача оголошення</h1>
  //     </div>
  //
  //     <div className={css.formAndDescription}>
  //
  //       <div className={css.productForm}>
  //
  //         <form onSubmit={handleSubmit(submit)}>
  //
  //           <div className={css.imageBox}>
  //
  //             <div className={css.labelImage}>ФотографіЇ * :</div>
  //
  //             <div>
  //               <img className={css.myImage} src={myImage} alt="" />
  //             </div>
  //
  //             <div className={css.divInputImage}>
  //
  //               <input
  //                 className={css.inputImage}
  //                 id="image"
  //                 type="file"
  //                 {...register('image')}
  //                 multiple
  //                 onChange={(event) => {
  //                   const newFile = event.target.files as FileList;
  //                   setImage(newFile[0]);
  //                 }}
  //               />
  //
  //               <button className={css.addImage} onClick={addImage} type="button">Додати фото</button>
  //
  //             </div>
  //
  //           </div>
  //
  //           <label className={css.label} htmlFor="categoryId">Категорія * :
  //
  //             <select className={css.input} id="categoryId" {...register('categoryId')}>
  //               {categories.map((category) => (
  //                 <option value={category.id} key={category.id}>{category.nameCategory}</option>))}
  //             </select>
  //
  //           </label>
  //
  //           <label className={css.label} htmlFor="title">Назва товару * :
  //             <input className={css.input} id="title" type="text" {...register('title')} />
  //           </label>
  //
  //           <label className={css.label} htmlFor="description">Опис товару * :
  //             <input className={css.input} id="description" type="text" {...register('description')} />
  //           </label>
  //
  //           <label className={css.label} htmlFor="price">Ціна товару або послуги * :
  //             <input className={css.input} id="price" type="number" {...register('price')} />
  //           </label>
  //
  //           <label className={css.label} htmlFor="year">Рік випуску :
  //             <input className={css.input} id="year" type="number" {...register('year')} />
  //           </label>
  //
  //           <button className={css.buttonForm} type="submit">Опублікувати</button>
  //
  //         </form>
  //
  //       </div>
  //
  //       <div className={css.rules}>
  //
  //         <div>
  //           <h1 className={css.headerDescription}>Як сфотографувати товар?</h1>
  //           <p>
  //             Зробіть одну фотографію на телефон з різних ракурсів у звичайній обстановці.
  //             Для покупців важливіше не краса фото, а реальний стан речей.
  //           </p>
  //         </div>
  //
  //         <div>
  //           <h1 className={css.headerDescription}>Яку ціну поставити?</h1>
  //           <p>
  //             В середньому, при продажу з рук ставлять ціну зі знижкою від 20% до 50% від вартості
  //             нового товару залежно від його стану.
  //           </p>
  //         </div>
  //
  //         <div>
  //           <h1 className={css.headerDescription}>Як описати товар?</h1>
  //           <p>
  //             Напишіть причину продажу товару, як і скільки ним користувались. Розкажіть про свої
  //             враження і рекомендації майбутньому власнику.
  //           </p>
  //         </div>
  //
  //       </div>
  //
  //     </div>
  //
  //   </div>
  // );
};

export { CreateProductPage };
