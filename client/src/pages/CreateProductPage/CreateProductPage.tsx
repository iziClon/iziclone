import React, { FC } from 'react';

const CreateProductPage: FC = () => (
  <div>
    <p>Подати оголошення</p>
  </div>
);

export { CreateProductPage };

// import React, { FC, useState, useEffect } from 'react';
// import {
//   ref,
//   uploadBytes,
//   listAll,
//   getDownloadURL,
// } from 'firebase/storage';
// import { useForm } from 'react-hook-form';
// import { useDispatch, useSelector } from 'react-redux';
// import { v4 } from 'uuid';
//
// import { storage } from '../../firebase';
// import { createProduct, changeStatus } from '../../store';
// import css from './CreateProductPage.module.css';
// import {IProduct} from "../../interfaces";
//
// const CreateProductPage: FC = () => {
//   const [myImage, setMyImage] = useState(null);
//   const [imageList, setImageList] = useState([]);
//
//   const handleChange = (e: any) => {
//     if (e.target.files[0]) {
//       setMyImage(e.target.files[0]);
//     }
//   };
//
//   const imageListRef = ref(storage, 'images/');
//
//   const addImage = () => {
//     if (image == null) return;
//     const imageRef = ref(storage, `images/${image + v4()}`);
//     uploadBytes(imageRef, image).then((snapshot) => {
//       getDownloadURL(snapshot.ref).then((url) => {
//         // @ts-ignore
//         setImageList((prev) => [...prev, url]);
//       });
//     });
//   };
//
//   useEffect(() => {
//     listAll(imageListRef).then((response) => {
//       response.items.forEach((item) => {
//         getDownloadURL(item).then((url) => {
//           // @ts-ignore
//           setImageList((prev) => [...prev, url]);
//         });
//       });
//     });
//   }, []);
//
//   const {
//     handleSubmit, register, reset, setValue, formState: { errors },
//   } = useForm(
//     // {resolver: joiResolver(carValidator), mode: 'onTouched'}
//   );
//
//   const dispatch = useDispatch();
//
//   const { form } = useSelector((state) => state['productSliceReducer']);
//
//   const {
//     id, title, description, categoryId, price, year, userId, image, status,
//   } = form;
//
//   const submit = (product: IProduct) => {
//     dispatch(createProduct(product));
//
//     reset();
//   }
//
//
//   // const submit = () => {
//   //   dispatch(
//   //     createProduct({
//   //       id, title, description, categoryId, price, year, userId, image, status
//   //     });
//   // )
//   //
//   //     reset();
//   // };
//
//   useEffect(() => {
//     if (id) {
//       setValue('title', title);
//       setValue('description', description);
//       setValue('categoryId', categoryId);
//       setValue('price', price);
//       setValue('year', year);
//       setValue('userId', userId);
//       setValue('status', status);
//     }
//   }, [id, title, description, categoryId, price, year, setValue]);
//
//   return (
//     <div>
//       <div>
//         <p>Подати оголошення</p>
//         {/* <img  className={css.image} src={imageList} alt={imageList} /> */}
//         <form onSubmit={handleSubmit(submit)}>
//           <input type="file" {...register('image')} onChange={handleChange} />
//           <button onClick={addImage} type="button">Додати фото</button>
//           {imageList.map((url) => <img className={css.image} src={url} alt="image" />)}
//
//           <label>Назва товару : <input type="text" {...register('title')} /></label>
//           <label>Опис товару : <input type="text" {...register('description')} /></label>
//           <label>Категорія : <input type="text" {...register('categoryId')} /></label>
//           <label>Ціна : <input type="text" {...register('price')} /></label>
//           <label>Рік : <input type="text" {...register('year')} /></label>
//           <label>UserId : <input type="text" {...register('userId')} /></label>
//           {/*<label>Status : <input type="text" {...register('status')} /></label>*/}
//            <input type="checkbox" value={status} onChange={()=>dispatch(changeStatus({id}))}/>
//           <button>Опублікувати</button>
//           <div>
//             {/* {errors.model && <span>{errors.model.message}</span>} */}
//             {/* {errors.price && <span>{errors.price.message}</span>} */}
//             {/* {errors.year && <span>{errors.year.message}</span>} */}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
//
// export { CreateProductPage };
