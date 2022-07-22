import React, {FC, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import {createProduct, getAllProducts} from '../../store';

const CreateProductPage: FC = () => {
  const {
    handleSubmit, register, reset, setValue
  } = useForm();

  const dispatch = useDispatch();

  const submit = (product: any) => {
    // @ts-ignore
    dispatch(createProduct({ product }));
    console.log(product);
    reset();
  };

  useEffect(() => {
  }, []);

  return (
    <div>
      <h1>Подати оголошення</h1>
      <form onSubmit={handleSubmit(submit)}>
        <label>Назва товару * : <input type="text" {...register('title')} /></label>
        <label>Опис товару * : <input type="text" {...register('description')} /></label>
        <label>Ціна товару або послуги * : <input type="text" {...register('price')} /></label>
        <label>Рік випуску : <input type="text" {...register('year')} /></label>
        <button>Подати оголошення</button>
      </form>
    </div>
  );
};

export { CreateProductPage };
