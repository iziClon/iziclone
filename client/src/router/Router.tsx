import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '../components';


import { HomePage, CategoryPage, AuthPage } from '../pages';
import { ProductDetails } from '../pages/ProductDetails/ProductDetails';


const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="category/:categoryId" element={<CategoryPage />} />
      <Route path="/createProduct" element={<CreateProductPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="productDetail/:productId" element={<ProductDetails />} />
    </Route>

    <Route path="/category" element={<Layout />}>
      <Route path=":categoryId" element={<CategoryPage />} />
    </Route>
  </Routes>
);

export { Router };
