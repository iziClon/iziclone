import { configureStore, combineReducers } from '@reduxjs/toolkit';

import categorySliceReducer from './category.slice';

const rootReducer = combineReducers({
  categories: categorySliceReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];
