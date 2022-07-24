import { configureStore, combineReducers } from '@reduxjs/toolkit';

import categorySliceReducer from './slices/category.slice';
import productSliceReducer from './slices/product.slice';
import productSByCategorySliceReducer from './slices/productsByCategory.slice';
import activeMenuSliceReducer from './slices/menuActive.slice';
import authSliceReducer from './slices/auth.slice';

const rootReducer = combineReducers({
    categories: categorySliceReducer,
    products: productSliceReducer,
    productsByCategory: productSByCategorySliceReducer,
    activeMenu: activeMenuSliceReducer,
    auth: authSliceReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];
