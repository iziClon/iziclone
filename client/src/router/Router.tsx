import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '../components';
import { HomePage, CategoryPage, AuthPage } from '../pages';

const Router = () => (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="category/:categoryId" element={<CategoryPage/>}/>
            <Route path="/login" element={<AuthPage/>}/>
        </Route>
    </Routes>
);

export { Router };
