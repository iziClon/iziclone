import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout, ProfileLayout } from '../components';
import {
  HomePage, CategoryPage, AuthPage, CreateProductPage
} from '../pages';
import { ProductDetails } from '../pages/ProductDetails/ProductDetails';
import { MyProductsPage } from '../pages/MyProductsPage/MyProductsPage';
import { MySalesPage } from '../pages/MySalesPage/MySalesPage';
import { MyPurchasesPage } from '../pages/MyPurchasesPage/MyPurchasesPage';
import { MyRatingAndReviewsPage } from '../pages/MyRatingAndReviewsPage/MyRatingAndReviewsPage';
import { MyWalletBalancePage } from '../pages/MyWalletBalancePage/MyWalletBalancePage';
import { MyFavouritesPage } from '../pages/MyFavouritesPage/MyFavouritesPage';
import { MySettingsPage } from '../pages/MySettingsPage/MySettingsPage';
import { MyWalletBonusesPage } from '../pages/MyWalletBonusesPage/MyWalletBonusesPahe';
import { MyWalletCardsPage } from '../pages/MyWalletCardsPage/MyWalletCardsPage';
import { MySubscriptionsPage } from '../pages/MySubscriptionsPage/MySubscriptionsPage';
import { MyContactInfoPage } from '../pages/MyContactInfoPage/MyContactInfoPage';


const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="category/:categoryId" element={<CategoryPage />} />
      <Route path="/createProduct" element={<CreateProductPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="productDetail/:productId" element={<ProductDetails />} />
      <Route path="my" element={<ProfileLayout />}>
        <Route path="products" element={<MyProductsPage />} />
        <Route path="sales" element={<MySalesPage />} />
        <Route path="purchases" element={<MyPurchasesPage />} />
        <Route path="rating-and-reviews" element={<MyRatingAndReviewsPage />} />
        <Route path="wallet-balance" element={<MyWalletBalancePage />} />
        <Route path="wallet-bonuses" element={<MyWalletBonusesPage />} />
        <Route path="wallet-cards" element={<MyWalletCardsPage />} />
        <Route path="favourites" element={<MyFavouritesPage />} />
        <Route path="subscriptions" element={<MySubscriptionsPage />} />
        <Route path="settings" element={<MySettingsPage />} />
        <Route path="settings/contact-info" element={<MyContactInfoPage />} />
      </Route>
    </Route>
    <Route path="/category" element={<Layout />}>
      <Route path=":categoryId" element={<CategoryPage />} />
    </Route>
  </Routes>
);

export
{
  Router,
};
