import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import { HomePage } from './pages';

const App: FC = () => (
  <Routes>

    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />

    </Route>

  </Routes>
);

export default App;
