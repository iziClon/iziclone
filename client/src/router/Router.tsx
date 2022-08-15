import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout, ProfileLayout } from '../components';


import {
  HomePage, CategoryPage, AuthPage, CreateProductPage,
} from '../pages';
import { ProductDetails } from '../pages/ProductDetails/ProductDetails';


const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="category/:categoryId" element={<CategoryPage />} />
      <Route path="/createProduct" element={<CreateProductPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="productDetail/:productId" element={<ProductDetails />} />
      <Route path="my" element={<ProfileLayout />}>
        <Route />
      </Route>
    </Route>

    <Route path="/category" element={<Layout />}>
      <Route path=":categoryId" element={<CategoryPage />} />
    </Route>
  </Routes>
);

export { Router };
