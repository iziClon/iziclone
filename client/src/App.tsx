import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import { HomePage } from './pages';
import { CategoryPage } from './pages/CategoryPage';
import { CreateProductPage } from './pages/CreateProductPage';

const App: FC = () => (
  <Routes>

    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/createProduct" element={<CreateProductPage />} />
    </Route>

    <Route path="/category" element={<Layout />}>
      <Route path=":categoryId" element={<CategoryPage />} />
    </Route>

  </Routes>
);

export default App;
