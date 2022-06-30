import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import { HomePage } from './pages';
import { CategoryPage } from './pages/CategoryPage';

const App: FC = () => (
  <Routes>

    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
    </Route>

    <Route path="/category" element={<Layout />}>
      <Route path=":categoryId" element={<CategoryPage />} />
    </Route>

  </Routes>
);

export default App;
