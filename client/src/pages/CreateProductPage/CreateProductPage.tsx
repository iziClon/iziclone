import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { createProduct } from '../../store';
import { useAppSelector } from '../../hook';

const CreateProductPage: FC = () => {
  const {
    handleSubmit, register, reset,
  } = useForm();

  const { categories } = useAppSelector((state) => state.categories);

  categories.map((category) => category);

  const dispatch = useDispatch();

  // const submit = (product: {categoryId: number, userId: number, price: number, year: number, image: string, status: boolean, title: string, description:string}) => {
  const submit = (product: any) => {
    // @ts-ignore
    dispatch(createProduct(product));
    reset();
  };

  useEffect(() => {
  }, []);

  return (
    <div>
      <h1>Подати оголошення</h1>
      <form onSubmit={handleSubmit(submit)}>
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
        <label>Image : <input type="text" {...register('image')} value="asdfghj" /></label>
        <button>Подати оголошення</button>
      </form>
    </div>
  );
};

export { CreateProductPage };
