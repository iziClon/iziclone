import { configureStore, combineReducers } from '@reduxjs/toolkit';

import categorySliceReducer from './slices/category.slice';
import productSliceReducer from './slices/product.slice';

const rootReducer = combineReducers({
  categories: categorySliceReducer,
  products: productSliceReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];
