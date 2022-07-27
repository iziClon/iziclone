import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '../components';
import {
  HomePage, CategoryPage, AuthPage, CreateProductPage,
} from '../pages';

const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="category/:categoryId" element={<CategoryPage />} />
      <Route path="/createProduct" element={<CreateProductPage />} />
      <Route path="/login" element={<AuthPage />} />
    </Route>

    <Route path="/category" element={<Layout />}>
      <Route path=":categoryId" element={<CategoryPage />} />
    </Route>
  </Routes>
);

export { Router };
